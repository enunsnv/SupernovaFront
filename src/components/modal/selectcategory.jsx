import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import axios from 'axios';
import api from '../../axios';
import '../ranking/ranking.css';
import TimeSuccess from "./timesuccess";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 85%;
    max-width: 400px;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
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

const SelectCategory = ({ open, onClose, earnedEXP }) => {
    const [selected, setSelected] = useState([]);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCatRank = async () => {
        try {
            const response = await api.get('/rankcategory/');
            const data = response.data;

            // 카테고리 순서 배열
            const categoryOrder = ['read', 'movie', 'walk', 'workout', 'study', 'sleep'];

            // 정렬된 데이터 배열 생성
            const sortedData = categoryOrder.map(category => ({
                category,
                src: `../${category}.png`,
                alt: category
            }));

            setCategories(sortedData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCatRank();
    }, []);

    const handleSelect = (category) => {
        setSelected((prev) => {
            if (prev.includes(category)) {
                return prev.filter((item) => item !== category);
            }
            if (prev.length < 2) {
                return [...prev, category];
            }
            return prev;
        });
    };

    const handleConfirm = async () => {
        try {
            const categoryString = selected.map(item => item.alt).join('|');
            await api.patch('/category/', { category: categoryString });
            onClose(); // Close SelectCategory modal
            setConfirmationOpen(true); // Open ConfirmationModal
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Container>
                    <Title>활동 카테고리</Title>
                    <SubTitle>오늘은 어떤 활동을 했나요? (최대 2개)</SubTitle>
                    <div className="grid-rank">
                        {categories.map((category) => (
                            <div
                                key={category.alt}
                                onClick={() => handleSelect(category)}
                                className={`item ${selected.includes(category) ? 'selected' : ''}`}
                            >
                                <img src={category.src} alt={category.alt} />
                            </div>
                        ))}
                    </div>
                    <Button disabled={selected.length === 0} onClick={handleConfirm}>
                        선택 완료
                    </Button>
                </Container>
            </Modal>
            <TimeSuccess open={confirmationOpen} onClose={() => setConfirmationOpen(false)} />
        </>
    );
};

export default SelectCategory;
