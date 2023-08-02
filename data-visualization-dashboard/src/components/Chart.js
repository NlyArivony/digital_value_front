import React from 'react';
import { Box } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
    const chartStyle = {
        fontSize: '12px', // Adjust the font size as needed
    };

    return (
        <Box borderWidth="1px" borderRadius="lg" p={4}>
            <LineChart width={600} height={300} data={data} style={chartStyle}>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line dataKey="volume" name="Search Volume" type="monotone" stroke="#8884d8" />
            </LineChart>
        </Box>
    );
};

export default Chart;
