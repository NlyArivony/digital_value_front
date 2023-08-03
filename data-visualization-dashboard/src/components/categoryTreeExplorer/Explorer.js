import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';
import CategoryTree from './CategoryTree';
import DataDisplay from './DataDisplay';

const Explorer = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [volumeSum, setVolumeSum] = useState(0);

  useEffect(() => {
    // Fetch categories from the API endpoint
    axios.get('http://localhost:5000/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    // Fetch data from the second API using the selected category's id
    axios.get(`http://localhost:5000/api/volumes/${category.id}`)
      .then(response => {
        // Calculate the sum of all volumes
        const volumes = response.data.map(item => item.volume);
        const sum = volumes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setVolumeSum(sum);
      })
      .catch(error => {
        console.error('Error fetching volumes:', error);
      });
  };

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

    </Box >

  );
};

export default Explorer;
