import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import { userIDState } from "../../atom/atom";
import { useRecoilState } from "recoil";
import SelectCategory from '../modal/selectcategory';
import api from "../../axios";

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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vw;
    color: #555555;
`;

const Button = styled.button`
    flex: 1;
    padding: 10px 0px;
    margin: 10px;
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

const TimerStop = ({ open, onClose }) => {
    const [userID] = useRecoilState(userIDState);
    const [selectCategoryOpen, setSelectCategoryOpen] = useState(false);

    const StopTimer = async () => {
        // Uncomment and update the code below to integrate with your API
        /*
        try {
            const response = await api.post('/stoptimer', {
                userId: userID,
            });
            console.log(response);
            onClose();
        } catch (error) {
            console.log(error);
        }
        */
        onClose(); // Close the TimerStop modal
        setSelectCategoryOpen(true); // Open the SelectCategory modal
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
                    <TextContainer>오늘의 공강 타이머를 종료할까요?</TextContainer>

                    <ButtonContainer>
                        <Button onClick={StopTimer}>네</Button>
                        <Button onClick={onClose}>아니요</Button>
                    </ButtonContainer>
                </Container>
            </Modal>
            <SelectCategory open={selectCategoryOpen} onClose={() => setSelectCategoryOpen(false)} />
        </>
    );
};

export default TimerStop;
