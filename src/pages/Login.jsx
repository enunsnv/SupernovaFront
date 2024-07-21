import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: darkorange;
  }
`;

const SignupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ShapeTop = styled.img`
  position: absolute;
  top: 0px;
  right: -10px;
`;

const ShapeBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: -50px;
`;

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <ShapeTop src='/img/top-orange.svg' />
        <Title>서비스명..</Title>
        <Input type="text" placeholder="닉네임" />
        <Input type="password" placeholder="비밀번호" />
        <SignupButtonContainer>
        <Button>회원가입</Button>
        </SignupButtonContainer>
        <ShapeBottom src='img/bottom-orange.svg' />
      </FormContainer>
    </Container>
  );
};

export default Login;
