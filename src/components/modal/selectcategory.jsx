import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import TimeSuccess from './timesuccess';

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

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    border: ${({ selected }) => (selected ? '3px solid #FFDA69' : 'none')};
    cursor: pointer;
    img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 10px;
    }
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

const SelectCategory = ({ open, onClose }) => {
    const [selected, setSelected] = useState([]);
    const [confirmationOpen, setConfirmationOpen] = useState(false);

    const images = [
        { src: '/mnt/data/image1.jpg', alt: 'Image 1' },
        { src: '/mnt/data/image2.jpg', alt: 'Image 2' },
        { src: '/mnt/data/image3.jpg', alt: 'Image 3' },
        { src: '/mnt/data/image4.jpg', alt: 'Image 4' },
    ];

    const handleSelect = (src) => {
        setSelected((prev) => {
            if (prev.includes(src)) {
                return prev.filter((item) => item !== src);
            }
            if (prev.length < 2) {
                return [...prev, src];
            }
            return prev;
        });
    };

    const handleConfirm = () => {
        onClose(); // Close SelectCategory modal
        setConfirmationOpen(true); // Open ConfirmationModal
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
                    <ImageContainer>
                        {images.map((image) => (
                            <ImageWrapper
                                key={image.src}
                                selected={selected.includes(image.src)}
                                onClick={() => handleSelect(image.src)}
                            >
                                <img src={image.src} alt={image.alt} />
                            </ImageWrapper>
                        ))}
                    </ImageContainer>
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
