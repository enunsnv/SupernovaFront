import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDState } from "../../atom/atom";
import api from "../../axios";
import SelectContainer from "./SelectContainer";
import { Modal, Box } from '@mui/material';
import styled from "styled-components";

const ModalContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 310px;
    width: 310px;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 0 5px;
`;

const PetSelect = ({ open, onClose, onSuccess }) => {
    const navigate = useNavigate();
    const [userID] = useRecoilState(userIDState);

    const handleSelectedPet = async (selectedPetIndex) => {
/*        try {
            const response = await api.post('/pet_select', {
                userId: userID,
                pet_state: selectedPetIndex
            });
            console.log(response);
            onSuccess();
        } catch (error) {
            console.log(error);
        }*/
        onSuccess();
        console.log(selectedPetIndex);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <ModalContainer>
                <SelectContainer onClick={handleSelectedPet} />
            </ModalContainer>
        </Modal>
    );
};

export default PetSelect;
