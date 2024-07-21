import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #ffa500;
  width: 30%;
  max-width: 500px;
  text-align: center;
  border-radius: 10px;
`;

const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ModalButton = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px;
  width: 100px;
`;

const ChallengeSuccess = ({ show, onClose }) => {
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalText>정답! <span style={{ color: '#ffa500' }}>50 Exp</span>를 획득했어요.</ModalText>
        <ModalButton onClick={onClose}>오예!</ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ChallengeSuccess;
