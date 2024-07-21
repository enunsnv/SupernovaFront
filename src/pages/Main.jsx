import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDState } from '../atom/atom';
import styled from 'styled-components';
import LinkInput from '../components/TimeTable/LinkInput';
import Navbar from '../components/navigation/Navbar';

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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
`;

const ToggleButton = styled.button`
  width: 30px;
  height: 30px;
  background: url('/img/toggle.svg') no-repeat center center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const SemesterInfo = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #000;
  position: absolute;
  right: 20px;
  flex-direction: row;
`;
const Semester = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #000;
  position: absolute;
  right: 20px;
  flex-direction: row;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 100%;
  padding: 0 20px; 
`;

const Info = styled.div`
  width: 100%; 
  padding: 0 20px; 
  text-align: left; 
  margin-left: 80px;
`;

const InfoText1 = styled.p`
  color: #000;
  font-size: 17px;
  text-align: left;
  margin-bottom: 4px;
`;

const InfoText2 = styled.p`
  font-size: 24px; 
  text-align: left;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 14px;
`;

const InfoText3 = styled.p`
  color: #555555;
  font-size: 13px;
  text-align: left;
  margin-top: 14px;
`;

const HighlightedText = styled.span`
  color: #F27200;
  font-weight: bold;
  font-size: 28px;
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

function Main() {
  const [userID, setUserID] = useRecoilState(userIDState);
  const navigate = useNavigate();
  const [showLinkInput, setShowLinkInput] = useState(false);

  return (
    <AppContainer>
      <Header>
        <ToggleButton onClick={() => setShowLinkInput(!showLinkInput)} />
        {showLinkInput && <LinkInput />}
        <SemesterInfo>
          <Semester>0000</Semester>학년도 <Semester>0</Semester>학기
        </SemesterInfo>
      </Header>
      
      <Content>
        <Info>
          <InfoText1>
            이번 주 공강 N시간 중
          </InfoText1>
          <InfoText2>
            <HighlightedText>N시간</HighlightedText> 을 활용했어요
          </InfoText2>
          <InfoText3>
            지난 주 대비 N%
          </InfoText3>
        </Info>
        <Placeholder>
          <PlaceholderText>펫 보이는 곳..</PlaceholderText>
        </Placeholder>
      </Content>

      <Footer>
        <Navbar />
      </Footer>
    </AppContainer>
  );
}

export default Main;
