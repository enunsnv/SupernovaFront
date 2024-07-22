import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  border: 1px solid #ffa500;
`;

const ConfirmationMessage = styled.div`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #FFDA69;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 14px;
  cursor: pointer;
`;

const FinalConfirmation = ({ onClose }) => (
  <ModalOverlay>
    <ModalContainer>
      <ConfirmationMessage>
        문제가 제출되었습니다.<br />
        인증 절차 후 문제 출제가 반영됩니다.
      </ConfirmationMessage>
      <ConfirmButton onClick={onClose}>오예!</ConfirmButton>
    </ModalContainer>
  </ModalOverlay>
);

export default FinalConfirmation;
