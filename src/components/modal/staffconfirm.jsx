import React, { useState } from 'react';
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

const ModalHeader = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  color: gray;
`;

const InputField = styled.input`
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
  border: 1px solid #FFDA69;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #FFDA69;
  border :none;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  font-size: 14px;
  margin: 0px 25px;
  width: 130px;

  &:hover {
    background-color: #ff8c00;
  }
`;

const StaffConfirm = ({ onClose, onSuccess }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder logic for submitting password
    const mockPassword = "1234"; // Mock password for demonstration

    if (password === mockPassword) {
      onSuccess();
    } else {
      alert('Invalid password. Please try again.');
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          한 번 제출하면 수정할 수 없어요!<br />
          인증 코드를 입력해주세요.
        </ModalHeader>
        <InputField
          type="text"
          placeholder="0000"
          value={password}
          onChange={handlePasswordChange}
        />
        <ButtonContainer>
          <Button onClick={handleSubmit}>제출</Button>
          <Button onClick={onClose}>취소</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default StaffConfirm;
