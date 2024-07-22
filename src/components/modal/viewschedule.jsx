import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import TimeTable from "../TimeTable/TimeTable";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    width: 100%;
    max-width: 450px;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 10px;
    margin-right: 10px;
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
    width: 100%;
    margin-top: 20px;
`;

const ScheduleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
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
    margin-top: 0;
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
                        <TimeTable />
                    </ScheduleContainer>
                </ScheduleWrapper>
                <Button onClick={onClose}>확인</Button>
            </Container>
        </Modal>
    );
};

export default ViewSchedule;
