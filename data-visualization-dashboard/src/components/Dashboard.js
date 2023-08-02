import React from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import Chart from './Chart';
import IdDropdown from './IdDropdown';
import DateRangePicker from './DateRangePicker';
import { useDashboardContext } from '../hooks/useDashboardContext';

const Dashboard = () => {
    const {
        searchVolumeData,
        dateRange,
        selectedId,
        setDateRange,
        setSelectedId,
    } = useDashboardContext();

    const handleIdSelect = (id) => {
        setSelectedId(id);
    };

    return (
        <Center>
            <Box p={4}>
                <IdDropdown onSelect={handleIdSelect} />
                <DateRangePicker
                    defaultStartDate={dateRange.startDate}
                    defaultEndDate={dateRange.endDate}
                    onSelect={(startDate, endDate) => setDateRange({ startDate, endDate })}
                />
                <SimpleGrid columns={1} spacing={6}>
                    {/* Here we check if selectedId is truthy before rendering the Chart */}
                    {selectedId && <Chart data={searchVolumeData} />}
                </SimpleGrid>
            </Box>
        </Center>
    );
};

export default Dashboard;
