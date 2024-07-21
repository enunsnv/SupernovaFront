import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIDState } from '../atom/atom';
import styled from 'styled-components';
import axios from 'axios';
import LinkInputModal from '../components/TimeTable/LinkInput';
import PetSelect from '../components/pet/PetSelect';
import Navbar from '../components/navigation/Navbar';
import ViewSchedule from '../components/modal/viewschedule';
import api from '../axios';

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
    width: 50px;
    height: 50px;
    margin: 10px;
    background: url('/img/toggle.svg') no-repeat center center;
    background-size: cover;
    border: none;
    cursor: pointer;
`;

const SemesterInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    position: absolute;
    right: 20px;
    text-align: right;
    margin-top: 30px;
`;

const ScheduleLink = styled.p`
    margin-top: 10px;
    padding: 0;
    font-size: 14px;
    color: gray;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: none;
    &:hover {
        color: #000;
    }
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
    margin-top: 50px;
`;

const InfoText1 = styled.p`
    color: #000;
    font-size: 17px;
    text-align: left;
    margin-bottom: 4px;
`;

const InfoText2 = styled.p`
    font-size: 20px;
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
    margin-bottom: 30px;
`;

const HighlightedText = styled.span`
    color: #F27200;
    font-weight: bold;
    font-size: 28px;
`;

const Placeholder = styled.div`
    width: 200px;
    height: 200px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px 116px;
    border-radius: 10px;
`;

const PlaceholderText = styled.p`
    color: #b0b0b0;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #ffe680;
`;

const ProgressBarContainer = styled.div`
    width: 190px;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin: 5px 0 0 0;
`;

const ProgressBarFill = styled.div`
    height: 100%;
    width: ${(props) => props.width}%;
    background-color: #F27200;
    transition: width 0.5s ease-in-out;
`;

const ProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const LevelText = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: #555555;
    margin-right: 150px;
`;

const ProgressBar = ({ progress }) => (
    <ProgressBarWrapper>
        <LevelText>Lv. {Math.floor(progress / 10)}</LevelText>
        <ProgressBarContainer>
            <ProgressBarFill width={progress} />
        </ProgressBarContainer>
    </ProgressBarWrapper>
);

function Main() {
    const [userID, setUserID] = useRecoilState(userIDState);
    const navigate = useNavigate();
    const [isLinkInputModalOpen, setIsLinkInputModalOpen] = useState(false);
    const [isPetSelectOpen, setIsPetSelectOpen] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);
    const [progress, setProgress] = useState(40); // 초기 진행 상황 값을 설정
    const [year_info, setYearInfo] = useState('');

    const handleSuccess = () => {
        setIsPetSelectOpen(false);
        setIsLinkInputModalOpen(true);
    };

    const handleLogin  = async () => {
        const userID = localStorage.getItem('userID');
            try {
              const response = await api.get(`/main/?userId=${userID}`, {
              });

              setYearInfo(response.data.year_info);

              } catch (error) {
                console.log(error); 
              }
    
        navigate('/main');
      };

      useEffect(() => {
        handleLogin();
        }, [userID]);

    return (
        <AppContainer>
            <Header>
                <ToggleButton onClick={() => setIsLinkInputModalOpen(true)} />
                <LinkInputModal
                    open={isLinkInputModalOpen}
                    onClose={() => setIsLinkInputModalOpen(false)}
                    onSuccess={handleSuccess}
                />
                <PetSelect
                    open={isPetSelectOpen}
                    onClose={() => setIsPetSelectOpen(false)}
                    onSuccess={handleSuccess}
                />
                <ViewSchedule
                    open={isScheduleOpen}
                    onClose={() => setIsScheduleOpen(false)}
                />
                <SemesterInfo>
                    <div>{year_info}학년도 0학기</div>
                    <ScheduleLink onClick={() => setIsScheduleOpen(true)}>
                        이번학기 시간표 확인하기
                    </ScheduleLink>
                </SemesterInfo>
            </Header>
            <Content>
                <Info>
                    <InfoText1>
                        이번 주 공강 N시간 N분 중
                    </InfoText1>
                    <InfoText2>
                        <HighlightedText>N시간 N분</HighlightedText> 을 활용했어요
                    </InfoText2>
                    <InfoText3>
                        지난 주 대비 N%
                    </InfoText3>
                </Info>
                <ProgressBar progress={progress} />
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
