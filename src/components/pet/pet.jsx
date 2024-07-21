import React from 'react';
import './pet.css';
import styled from 'styled-components';

const PetContainer = styled.div`
    cursor: pointer;
`;

function Pet({ onClick, selected }) {
    return (
        <PetContainer
            onClick={onClick}
            className={`pet-container ${selected ? 'selected' : ''}`}
        >
        </PetContainer>
    );
}

export default Pet;