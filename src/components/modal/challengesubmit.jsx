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

const CodeBlock = styled.div`
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffa500;
  margin-bottom: 20px;
  text-align: left;
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

const ChallengeSubmit = ({ show, onClose, onConfirm, answer }) => {
  return (
    <ModalContainer show={show}>
      <ModalContent>
        <ModalText>한 번 제출하면 수정할 수 없어요! 제출할까요?</ModalText>
        <CodeBlock>
          {answer}
        </CodeBlock>
        <ButtonContainer>
          <ModalButton onClick={onConfirm}>네</ModalButton>
          <ModalButton onClick={onClose}>아니요</ModalButton>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ChallengeSubmit;
