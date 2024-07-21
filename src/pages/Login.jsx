import React, {useState} from 'react';
import styled from 'styled-components';
import {userIDState} from "../atom/atom";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import api from '../axios';
import LinkInputModal from '../components/TimeTable/LinkInput';
import PetSelect from '../components/pet/PetSelect';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 100%;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  position: relative;
`;

const Logo = styled.img`
  width: 200px;
  margin: 250px 0 50px;
`;

const Input = styled.input`
  width: 80%;
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
  right: 0px;
  width: 50%
`;

const ShapeBottom = styled.img`
  position: absolute;
  left: -10px;
  height: auto; 
  width: 50%;
`;

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const setUserID = useSetRecoilState(userIDState);
  const navigate = useNavigate();
  const [isLinkInputModalOpen, setIsLinkInputModalOpen] = useState(false);
  const [isPetSelectOpen, setIsPetSelectOpen] = useState(false);
  const [isPetSelected, setIsPetSelected] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false); // Add state for is_new_user

  const handleSuccess = () => {
    setIsPetSelectOpen(false);
    setIsLinkInputModalOpen(true);
    setIsPetSelected(true);
   };

  const openselect = () => {
    setIsPetSelectOpen(true);
    setIsLinkInputModalOpen(false);

  };

  const handleLogin  = async () => {
    const userID = `${nickname}@${password}`;
    setUserID(userID);
        
    try {
      const response = await api.get(`/main/?userId=${userID}`);
      const data = response.data;

      if (data.is_new_user) {
        setIsNewUser(true);
        setIsLinkInputModalOpen(true);
        setIsPetSelectOpen(true);
      } else {
        setIsNewUser(false);
        navigate('/main'); // Navigate to main page if not a new user
      }
    } catch (error) {
      console.log(error); 
    }

  };

  return (
    <AppContainer>
      <FormContainer>
        <LinkInputModal
          open={isLinkInputModalOpen}
          onClose={() => {
            setIsLinkInputModalOpen(false);
            navigate('/main');
        }}
          onOpenPetSelect={openselect}
          isPetSelected={isPetSelected}
        />
        <PetSelect
          open={isPetSelectOpen}
          onClose={() => setIsPetSelectOpen(false)}
          onSuccess={handleSuccess}
        />

        <ShapeTop src='/img/top-orange.svg' alt="top shape" />
        <Logo src='/img/logo.svg' alt="logo" width='100px' height='100px'/>
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
          <Button onClick={handleLogin}>로그인</Button>
        </SignupButtonContainer>
        <ShapeBottom src='/img/bottom-orange.svg' alt="bottom shape" />
      </FormContainer>
    </AppContainer>
  );
};

export default Login;
