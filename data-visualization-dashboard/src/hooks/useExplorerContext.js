import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ExplorerContext = createContext();

export const useExplorerContext = () => {
    return useContext(ExplorerContext)
};

export const ExplorerProvider = ({ children }) => {
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
        <ExplorerContext.Provider value={{ categories, selectedCategory, volumeSum, handleCategorySelect }}>
            {children}
        </ExplorerContext.Provider>
    );
};
