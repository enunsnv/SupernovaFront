import React from 'react';
import './pet.css';
import styled from 'styled-components';

const PetContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;

    &.selected {
        border: 3px solid #FFDA69;
    }
`;

const PetImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

function Pet({ onClick, selected, imageUrl }) {
    return (
        <PetContainer
            onClick={onClick}
            className={`pet-container ${selected ? 'selected' : ''}`}
        >
            <PetImage src={imageUrl} alt="Pet" />
        </PetContainer>
    );
}

export default Pet;