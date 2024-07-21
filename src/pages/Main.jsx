import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDState } from '../atom/atom';
import styled from 'styled-components';
//import api from '../axios';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  background-color: #fff;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
`;

const YellowIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffec99;
  border-radius: 50%;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Placeholder = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
`;

const PlaceholderText = styled.p`
  color: #b0b0b0;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #ffe680;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
`;

const HomeIcon = styled(Icon)`
  background: url('/img/home.svg') no-repeat center center;
`;

const ClockIcon = styled(Icon)`
  background: url('/img/clock.svg') no-repeat center center;
`;

const CodepenIcon = styled(Icon)`
  background: url('/img/codepen.svg') no-repeat center center;
`;

const CommandIcon = styled(Icon)`
  background: url('/img/command.svg') no-repeat center center;
`;

function Main() {
  const [userID, setUserID] = useRecoilState(userIDState);
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get('/user/data', { params: { userID } });
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [userID]);

  return (
    <AppContainer>
      <Header>
        <YellowIcon />
      </Header>
      <Content>
        <p>이번 주 n 시간 중~</p>
        <Placeholder>
          <PlaceholderText>펫 보이는 곳..</PlaceholderText>
        </Placeholder>
      </Content>
      <Footer>
        <HomeIcon onClick={() => navigate('/home')} />
        <ClockIcon onClick={() => navigate('/clock')} />
        <CodepenIcon onClick={() => navigate('/codepen')} />
        <CommandIcon onClick={() => navigate('/command')} />
      </Footer>
    </AppContainer>
  );
}

export default Main;
