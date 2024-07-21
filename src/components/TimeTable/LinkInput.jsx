import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import PetSelect from '../pet/PetSelect';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 80%;
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

const Input = styled.input`
    width: 90%;
    padding: 15px;
    margin: 10px 0;
    border: 0px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    background-color: #F5F5F5;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
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
        background-color: ${({ disabled }) => (disabled ? '#ccc' : '#F27200')};
    }
`;

const LinkInputModal = ({ open, onClose, onOpenPetSelect, selectedPet }) => {
    const [link, setLink] = useState('');

    const handleChange = (event) => {
        setLink(event.target.value);
    };

    const handleSubmit = (type) => {
        if (type === 'select') {
            onOpenPetSelect(); // PetSelect 모달을 여는 콜백 호출
        } else if (type === 'submit') {
            console.log('Submitted link:', link);
            console.log('Selected pet:', selectedPet);
            // 여기에 링크를 제출하는 로직 추가
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Container>
                <Input
                    type="text"
                    placeholder="에브리타임의 시간표 링크 붙여넣기"
                    value={link}
                    onChange={handleChange}
                />
                <ButtonContainer>
                    <Button
                        onClick={() => handleSubmit('select')}
                        disabled={selectedPet !== null}
                    >
                        {selectedPet !== null ? '펫 선택완료' : '펫 고르기'} 
                    </Button>
                    <Button 
                        onClick={() => handleSubmit('submit')}
                        disabled={selectedPet === null} 
                    >
                        등록 완료!
                    </Button>
                </ButtonContainer>
            </Container>
        </Modal>
    );
};

export default LinkInputModal;
