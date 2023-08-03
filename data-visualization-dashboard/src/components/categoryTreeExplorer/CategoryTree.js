import React, { useState } from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

const CategoryTree = ({ categories, onCategorySelect }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategoryId(category.id);
        onCategorySelect(category);
    };

    const renderCategories = (categories) => {
        return (
            <List style={{ overflowY: 'auto', maxHeight: '300px' }}>
                {categories.map((category) => (
                    <ListItem
                        key={category.id}
                        style={{
                            cursor: 'pointer',
                            color: category.id === selectedCategoryId ? 'pink' : 'inherit',
                        }}
                        onClick={() => handleCategorySelect(category)}
                    >
                        <Text>
                            {category.name}
                        </Text>
                        {category.children && renderCategories(category.children)}
                    </ListItem>
                ))}
            </List>
        );
    };

    return (
        <Box>
            {renderCategories(categories)}
        </Box>
    );
};

export default CategoryTree;
