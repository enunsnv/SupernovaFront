import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 160px;
  width: 310px;
  background-color: white;
  border: 1px solid #F27200;
  border-radius: 15px;
  padding: 0 5px;
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 18px;
  margin: 10px 0;
  border: 0px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  background-color: #F5F5F5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 110px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  max-width: 450px;
  padding: 15px 20px;
  margin-top: 10px;
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

const Footer = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  color: #777;

  a {
    color: #4CAF50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkInput = () => {
  const [link, setLink] = useState('');

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted link:', link);
    // 여기에 링크를 제출하는 로직 추가 !!
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="에브리타임의 시간표 링크 붙여넣기"
        value={link}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button onClick={handleSubmit}>펫 선택</Button>
        <Button onClick={handleSubmit}>등록 완료!</Button>
      </ButtonContainer>
     
    </Container>
  );
};

export default LinkInput;
