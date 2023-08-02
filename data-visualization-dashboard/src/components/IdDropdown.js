import React, { useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { useIdContext } from '../hooks/useIdContext';

const IdDropdown = ({ onSelect }) => {
    const ids = useIdContext();

    useEffect(() => {
        if (ids.length > 0) {
            // Call the onSelect function with the first ID in the ids array by default
            onSelect(ids[0]);
        }
    }, [ids, onSelect]);

    const handleIdSelect = (event) => {
        const selectedId = event.target.value;
        onSelect(selectedId);
    };

    return (
        <Select onChange={handleIdSelect}>
            {ids.map((id) => (
                <option key={id} value={id}>
                    {id}
                </option>
            ))}
        </Select>
    );
};

export default IdDropdown;
