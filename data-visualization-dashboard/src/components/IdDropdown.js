import React from 'react';
import { Select } from '@chakra-ui/react';
import { useIdContext } from '../hooks/useIdContext';

const IdDropdown = ({ onSelect }) => {
    const ids = useIdContext();

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
