import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import axios from 'axios';

const IdDropdown = ({ onSelect }) => {
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

    const handleIdSelect = (event) => {
        const selectedId = event.target.value;
        onSelect(selectedId);
    };

    return (
        <Select placeholder="Select ID" onChange={handleIdSelect}>
            {ids.map((id) => (
                <option key={id} value={id}>
                    {id}
                </option>
            ))}
        </Select>
    );
};

export default IdDropdown;
