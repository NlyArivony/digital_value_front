import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const IdContext = createContext();

export const useIdContext = () => {
    const ids = useContext(IdContext);
    if (!ids) {
        throw new Error('useIdContext must be used within an IdProvider.');
    }
    return ids;
};

export const IdProvider = ({ children }) => {
    const [ids, setIds] = useState([]);

    useEffect(() => {
        const fetchIds = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/categories/id');
                setIds(response.data);
            } catch (error) {
                console.error('Error fetching IDs:', error);
            }
        };

        fetchIds();
    }, []);

    return <IdContext.Provider value={ids}>{children}</IdContext.Provider>;
};
