import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 95%;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const SubTitle = styled.div`
    font-size: 14px;
    color: #555555;
    margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    height: 100vw;
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 0px solid #4CAF50;
    border-radius: 10px;
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#FFDA69')};
    color: black;
    font-size: 14px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-weight: 500;
    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#ccc' : '#F2AB00')};
    }
`;

const PeopRank = () => {

    return (
        <Container>
            <div style={{ background: '#FFD700', padding: '10px', borderRadius: '10px', margin: '0 10px' }}>운동 #0001</div>
            <div style={{ background: '#FFD700', padding: '10px', borderRadius: '10px', margin: '0 10px' }}>운동 #0001</div>
            <div style={{ background: '#FFD700', padding: '10px', borderRadius: '10px', margin: '0 10px' }}>운동 #0001</div>
        </Container>
    );
};

export default PeopRank;
