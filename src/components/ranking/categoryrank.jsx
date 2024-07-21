import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import axios from "axios";
import api from "../../axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 85%;
    background-color: white;
    border: 1px solid #FFDA69;
    border-radius: 15px;
    box-sizing: border-box;
    position: absolute;
    top: 250%;
    left: 50%;
    transform: translate(-50%, -50%);
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

const CategoryRank = () => {
    const [sortedData, setSortedData] = useState([]);

    const getCatRank = async () => {
        try {
            const response = await api.get('/rankcategory/');
            const data = response.data;

            // 카테고리 순서 배열
            const categoryOrder = ['read', 'movie', 'walk', 'workout', 'study', 'sleep'];

            // 정렬된 데이터 배열 생성
            const sortedData = categoryOrder.map(category => ({
                category,
                value: data[category]
            }));

            setSortedData(sortedData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCatRank();
    }, []);

    return (
        <div>
            <h1>Category Rank</h1>
            <ul>
                {sortedData.map(item => (
                    <li key={item.category}>
                        {item.category}: {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CategoryRank;
