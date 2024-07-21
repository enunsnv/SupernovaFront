import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    width: 30%;
    max-width: 600px;
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
    overflow-y: auto;
`;

const ScheduleWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`;

const ScheduleContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 2px;
`;

const TimeSlot = styled.div`
    grid-column: ${({ col }) => col};
    grid-row: ${({ row }) => row};
    background-color: ${({ color }) => color};
    color: black;
    border: 1px solid #ccc;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    font-size: 12px;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    margin-top: auto;
    border: 0px solid #4CAF50;
    border-radius: 10px;
    background-color: #FFDA69;
    color: black;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #F27200;
    }
`;

const ViewSchedule = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Container>
                <ScheduleWrapper>
                    <ScheduleContainer>
                        {/* Add your TimeSlot components here */}
                    </ScheduleContainer>
                </ScheduleWrapper>
                <Button onClick={onClose}>확인</Button>
            </Container>
        </Modal>
    );
};

export default ViewSchedule;
