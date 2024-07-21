import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userIDState } from '../atom/atom';
import styled from 'styled-components';
import api from '../axios';
import ViewSchedule from '../components/modal/viewschedule';
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
    position: relative;
    width: 100%;
    height: 100px;
`;

const ShapeLeft = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 350px;
    z-index: 1;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const ShapeRight = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 350px;
    z-index: 1;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const SemesterInfo = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;
    z-index: 2;
    font-size: 18px;
    font-weight: 400;
    color: #000;

    span {
      font-size: 23px;
      font-weight: 500;
    }
`;

const ScheduleLink = styled.p`
    margin-top: 10px;
    font-size: 14px;
    color: #555555;
    cursor: pointer;
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

const InfoText1 = styled.div`
    color: #000;
    font-size: 16px;
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
    margin: 30px 0 116px;
    border-radius: 10px;
`;

const PlaceholderImg = styled.img`
    width: 130px;
    height: 130px;
    position: relative;
    top: 20px;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
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
        <LevelText>Lv. {Math.floor(progress / 10) + 1}</LevelText>
        <ProgressBarContainer>
            <ProgressBarFill width={progress} />
        </ProgressBarContainer>
    </ProgressBarWrapper>
);

function Main() {
    const [userID, setUserID] = useRecoilState(userIDState);
    const [progress, setProgress] = useState(0); // Initial progress value
    const [data, setData] = useState('');
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    const LoadData = async () => {
        const userID = localStorage.getItem('userID');
        
        try {
            const response = await api.get(`/main/?userId=${userID}`);
            setData(response.data);
        } catch (error) {
            console.log(error); 
        }
    };

    useEffect(() => {
        LoadData();
        setProgress(ProgressVal);
    }, []);

    const petcode = data.pet_code;
    const petImageUrl = `/pet/pet${petcode}.gif`;

    const emptySeconds = data.empty_time;
    const emptyMinutes = Math.floor(emptySeconds / 60);
    const emptyHours = Math.floor(emptyMinutes / 60);
    const remainingMinutes = emptyMinutes % 60;

    const TimerSeconds = data.timer_sum;
    const TimerMinute = Math.floor(TimerSeconds / 60);
    const TimerHours = Math.floor(TimerMinute / 60);
    const remainingTimerMinutes = TimerMinute % 60;

    const Percent = parseFloat((TimerSeconds / emptySeconds) * 100).toFixed(2);
    const ProgressPTG= data.pet_ptg;
    const ProgressVal = ProgressPTG * 10;


    return (
        <AppContainer>
            <Header>
                <ShapeLeft src='/img/main-left-orange.svg' alt="top shape" />
                <ShapeRight src='/img/main-right-orange.svg' alt="top shape" />
                <SemesterInfo>
                    <div><span>{data.year_info}</span> 학년도 <span>{data.semester_info}</span> 학기</div>
                    <ScheduleLink onClick={() => setIsScheduleOpen(true)}>
                        이번학기 시간표 확인하기
                    </ScheduleLink>
                </SemesterInfo>
            </Header>
            <ViewSchedule
                open={isScheduleOpen}
                onClose={() => setIsScheduleOpen(false)}
            />
            <Content>
                <Info>
                    <InfoText1>
                        이번 주 공강 {emptyHours}시간 {remainingMinutes}분 중
                    </InfoText1>
                    <InfoText2>
                        <HighlightedText>{TimerHours}시간 {remainingTimerMinutes}분</HighlightedText> 을 활용했어요
                    </InfoText2>
                    <InfoText3>
                        이번 주 공강의 {Percent}% 동시와 함께 하는 중!
                    </InfoText3>
                </Info>
                <ProgressBar progress={progress} />
                <Placeholder>
                  <PlaceholderImg src={petImageUrl} alt={`Pet ${petcode}`}/>
                </Placeholder>
               
            </Content>
            <Footer>
                <Navbar />
            </Footer>
        </AppContainer>
    );
}

export default Main;
