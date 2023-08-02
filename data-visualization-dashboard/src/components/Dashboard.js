import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import Chart from './Chart';
import axios from 'axios';
import IdDropdown from './IdDropdown';
import DateRangePicker from './DateRangePicker';

const Dashboard = () => {
    const [searchVolumeData, setSearchVolumeData] = useState([]);
    const [dateRange, setDateRange] = useState({
        startDate: getLast24Months(),
        endDate: new Date().toISOString().slice(0, 10)
    });
    const [_selectedId, setSelectedId] = useState('');

    function getLast24Months() {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 24);
        return currentDate.toISOString().slice(0, 10);
    }

    function getFormattedDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/volumes/${_selectedId}`);
                const allData = response.data;

                const startDate = getFormattedDate(new Date(dateRange.startDate));
                const endDate = getFormattedDate(new Date(dateRange.endDate));
                const filteredData = allData.filter(
                    (data) => data.date >= startDate && data.date <= endDate
                );

                setSearchVolumeData(filteredData);
            } catch (error) {
                console.error('Error fetching search volume data:', error);
            }
        };

        fetchData();
    }, [dateRange, _selectedId]);

    return (
        <Center>
            <Box p={4}>
                <IdDropdown onSelect={(id) => setSelectedId(id)} />
                <DateRangePicker
                    defaultStartDate={dateRange.startDate}
                    defaultEndDate={dateRange.endDate}
                    onSelect={(startDate, endDate) => setDateRange({ startDate, endDate })}
                />
                <SimpleGrid columns={1} spacing={6}>
                    <Chart data={searchVolumeData} />
                </SimpleGrid>
            </Box>
        </Center>
    );
};

export default Dashboard;
