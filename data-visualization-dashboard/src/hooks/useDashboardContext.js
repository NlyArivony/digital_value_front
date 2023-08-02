import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DashboardContext = createContext();

export const useDashboardContext = () => {
    return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
    const [searchVolumeData, setSearchVolumeData] = useState([]);
    const [dateRange, setDateRange] = useState({
        startDate: getLast24Months(),
        endDate: new Date().toISOString().slice(0, 10),
    });
    const [selectedId, setSelectedId] = useState('');

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
                if (!selectedId) {
                    // Do nothing if selectedId is empty
                    return;
                }

                const response = await axios.get(`http://localhost:5000/api/volumes/${selectedId}`);
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
    }, [dateRange, selectedId]);

    return (
        <DashboardContext.Provider
            value={{
                searchVolumeData,
                dateRange,
                selectedId,
                setDateRange,
                setSelectedId,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
