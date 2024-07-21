import React, {useState} from 'react';
import styled from 'styled-components';
import {userIDState} from "../atom/atom";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  background-color: white;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  height: 100vh; 
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
  margin: 100px 0;
`;

const Input = styled.input`
  width: 95%;
  padding: 20px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  background-color: #FFDA69;
  color: black;
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 100px;
  width: 100px;
  font-size: 15px;

  &:hover {
    background-color: darkorange;
  }
`;

const SignupButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ShapeTop = styled.img`
  position: absolute;
  right: -10px;
`;

const ShapeBottom = styled.img`
  position: absolute;
  left: -10px;
`;

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const setUserID = useSetRecoilState(userIDState);
  const navigate = useNavigate();

  const handleLogin = () => {
    const userID = `${nickname}#${password}`;
    setUserID(userID);
    navigate('/main');
  };

  return (
    <Container>
      <FormContainer>
        <ShapeTop src='/img/top-orange.svg' alt="top shape" />
        <Title>서비스명..</Title>
        <Input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
        />
        <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <SignupButtonContainer>
          <Button  onClick={() => navigate('/main')}>로그인</Button>
        </SignupButtonContainer>
        <ShapeBottom src='/img/bottom-orange.svg' alt="bottom shape" />
      </FormContainer>
    </Container>
  );
};

export default Login;
