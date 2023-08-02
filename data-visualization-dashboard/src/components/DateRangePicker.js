import React, { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

const DateRangePicker = ({ onSelect, defaultStartDate, defaultEndDate }) => {
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);

    const handleDateRangeSelect = () => {
        // Call the onSelect function passed from Dashboard with selected dates
        onSelect(startDate, endDate);
    };

    return (
        <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} mb={4} />
            <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} mb={4} />
            <Button colorScheme="blue" onClick={handleDateRangeSelect}>
                Apply
            </Button>
        </Box>
    );
};

export default DateRangePicker;