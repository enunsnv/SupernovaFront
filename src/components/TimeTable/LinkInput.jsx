import React, { useState } from 'react';
import styled from 'styled-components';
import SelectContainer from '../monster/SelectContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #F27200;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
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
  background-color: #FFDA69;
  color: black;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #45a049;
  }
`;

const LinkInput = () => {
  const [link, setLink] = useState('');
  const [isSelectContainerOpen, setIsSelectContainerOpen] = useState(false);

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (type) => {
    if (type === 'select') {
      setIsSelectContainerOpen(true);
    } else if (type === 'submit') {
      console.log('Submitted link:', link);
      // 여기에 링크를 제출하는 로직 추가 !!
    }
  };

  return (
    <>
      {isSelectContainerOpen ? (
        <SelectContainer />
      ) : (
        <Container>
          <Input
            type="text"
            placeholder="에브리타임의 시간표 링크 붙여넣기"
            value={link}
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button onClick={() => handleSubmit('select')}>펫 고르기</Button>
            <Button onClick={() => handleSubmit('submit')}>등록 완료!</Button>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default LinkInput;
