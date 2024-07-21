import React, {useState} from 'react';
import styled from 'styled-components';
import {userIDState} from "../atom/atom";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;

`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 33px;
  color: #F28E00;
  margin: 190px 0 50px;
  text-shadow: 1px 1px 20px #F27200;
`;

const Input = styled.input`
  width: 80%;
  padding: 20px;
  margin: 10px 30px 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  background-color: #FFDA69;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 70px;
  margin-bottom: 45px;
  width: 100px;
  height: 40px;
  font-size: 15px;
  box-shadow: 1px 1px 10px #F2AB00;
  
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
  right: 20px;
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
    const userID = `${nickname}@${password}`;
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
          <Button  onClick={handleLogin}>로그인</Button>
        </SignupButtonContainer>
        <ShapeBottom src='/img/bottom-orange.svg' alt="bottom shape" />
      </FormContainer>
    </Container>
  );
};

export default Login;