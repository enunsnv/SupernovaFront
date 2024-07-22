import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import api from "../../axios";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: auto;
    width: 100%;
    max-width: 380px;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;
    overflow-x: auto;
    scrollbar-width: none;
    top: 50%;
    left: 50%;
`;

const Item = styled.div`
    background: #FFD700;
    padding: 15px 20px; /* 좌우 패딩을 늘림 */
    border-radius: 10px;
    margin: 0 9px; /* 좌우 마진을 늘림 */
    flex-basis: 150px; /* 기본 너비 설정 */
    text-align: center;
`;

const PeopRank = () => {
    const [top10, setTop10] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/top10/');
                setTop10(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const formatUserId = (userId) => {
        const namePart = userId.split('@')[0];
        return namePart.length > 3 ? `${namePart.slice(0, 3)}` : namePart;
    };

    return (
        <Container>
            {top10.map((item, index) => (
                <Item key={index}>
                    {formatUserId(item.user_id)} {item.pet_ptg.toFixed(2)}%
                </Item>
            ))}
        </Container>
    );
};

export default PeopRank;
