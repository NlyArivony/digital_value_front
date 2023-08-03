import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const DataDisplay = ({ selectedCategory, volumeSum }) => {
    return (
        <Box>
            <Box style={{ overflowY: 'auto', maxHeight: '300px' }}>
                <Heading as="h2" size="md">{selectedCategory.name} :</Heading>
                <pre>{JSON.stringify(selectedCategory, null, 2)}</pre>
                {/* Display ancestors */}
                <Box mt={3}>
                    <Heading as="h3" size="md">
                        Ancestors:
                    </Heading>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        {selectedCategory.ancestors.map((ancestor) => (
                            <li key={ancestor.id}>{ancestor.name}</li>
                        ))}
                    </ul>
                </Box>
            </Box>
            <Heading as="h2" size={7} pt={3}>Total volume : {volumeSum}</Heading>
        </Box>
    );
};

export default DataDisplay;
