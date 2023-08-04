import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CategoryTree from './CategoryTree';
import DataDisplay from './DataDisplay';
import { useExplorerContext } from '../../hooks/useExplorerContext';

const Explorer = () => {
  const { categories, selectedCategory, volumeSum, handleCategorySelect } = useExplorerContext();

  // console.log(selectedCategory)

  return (
    <Box>
      <Heading as="h1" size="lg" textAlign="left" mb="4">
        Categories explorer
      </Heading>
      <Box p="4" display="grid" gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="4">
        <Box p="4" rounded="md" bg="rgba(255, 255, 255, 0.1)" boxShadow="md" overflowY="auto">
          <CategoryTree categories={categories} onCategorySelect={handleCategorySelect} />
        </Box>
        <Box p="4" rounded="md" bg="rgba(255, 255, 255, 0.1)" boxShadow="md" minH="350px" overflowY="auto" minWidth={400}>
          {selectedCategory ? <DataDisplay selectedCategory={selectedCategory} volumeSum={volumeSum} /> : <Heading as="h3" size="md">Select a category to view data.</Heading>}
        </Box>
      </Box>
    </Box>
  );
};

export default Explorer;
