import React from 'react';
import { Box } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" p={4}>
            <LineChart width={600} height={300} data={data}>
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
