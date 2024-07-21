import React from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';

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

const TextContainer = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    color: #555555;
    font-size: 16px;
`;

const HighlightText = styled.span`
    color: #F2AB00;
    font-weight: bold;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: 0px solid #4CAF50;
    border-radius: 10px;
    background-color: #FFDA69;
    color: black;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #F2AB00;
    }
`;

const TimeSuccess = ({ open, onClose, earnedEXP }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Container>
                <TextContainer>
                    수고했어요!
                    <br />
                    <HighlightText>10 * {earnedEXP} Exp</HighlightText>를 획득했어요.
                </TextContainer>
                <Button onClick={onClose}>오옝!</Button>
            </Container>
        </Modal>
    );
};

export default TimeSuccess;
