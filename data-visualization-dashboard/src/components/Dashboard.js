import React, { useEffect } from 'react';
import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import Chart from './Chart';
import DateRangePicker from './DateRangePicker';
import { useDashboardContext } from '../hooks/useDashboardContext';
import Explorer from './categoryTreeExplorer/Explorer';
import { useExplorerContext } from '../hooks/useExplorerContext';

const Dashboard = () => {
    const {
        searchVolumeData,
        dateRange,
        selectedId,
        setDateRange,
        setSelectedId,
    } = useDashboardContext();

    const { selectedCategory } = useExplorerContext();
    console.log(selectedCategory)

    useEffect(() => {
        if (selectedCategory) {
            setSelectedId(selectedCategory.id);
        }
    }, [selectedCategory, setSelectedId]);

    return (
        <Center>
            <Box p={4} maxWidth="800px">
                <Box mb={4}>
                    <Explorer />
                </Box>
                <Box mb={4}>
                    <DateRangePicker
                        defaultStartDate={dateRange.startDate}
                        defaultEndDate={dateRange.endDate}
                        onSelect={(startDate, endDate) => setDateRange({ startDate, endDate })}
                    />
                </Box>
                <SimpleGrid columns={1} spacing={6}>
                    {/* Here we check if selectedId is truthy before rendering the Chart */}
                    {selectedId && <Chart data={searchVolumeData} />}
                </SimpleGrid>
            </Box>
        </Center>
    );
};

export default Dashboard;
