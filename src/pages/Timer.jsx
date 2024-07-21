import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from "../axios";
import Navbar from '../components/navigation/Navbar';
import TimerStop from '../components/timer/TimerStop';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  text-align: left; 
  color: #555555;
`;

const Text = styled.li`
  text-align: left; 
`;

const TimerIcon = styled.div`
  position: relative;
  margin: 140px 0 30px;
  width: 140px;
  height: 140px;
  border: 2px solid #F27200;
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ClockHand = styled.div`
  position: absolute;
  width: 2px;
  height: 50px;
  background-color: #F27200;
  top: 23px;
  left: 50%;
  transform-origin: bottom;
  transition: transform 0.1s linear;
`;

const TopLine = styled.div`
  position: absolute;
  width: 43px;
  height: 2px;
  background-color: #F27200;
  top: -23px;
  left: 48px;
  border-radius: 2px;
`;

const SideLine = styled.div`
  position: absolute;
  width: 27px;
  height: 2px;
  background-color: #F27200;
  top: 12px;
  right: -15px;
  transform: rotate(45deg);
  border-radius: 2px;
`;

const Time = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-shadow: 1px 1px 2px #F27200;
  margin: 0 20px 40px;
  color: #555555;
`;

const TotalTime = styled.div`
  color: #555555;
  margin-top: 20px;
`;

const ShapeLeft = styled.img`
  position: absolute;
  left: -10px;
`;

const ShapeRight = styled.img`
  position: absolute;
  right: -10px;
`;

const TimerController = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const ControllerImg = styled.img`
  cursor: pointer;
`;

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    if (isRunning) {
      const start = Date.now() - time * 1000;
      const update = () => {
        setTime(Math.floor((Date.now() - start) / 1000));
        requestRef.current = requestAnimationFrame(update);
      };
      requestRef.current = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const handlePlay = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleQuit = () => setShowModal(true);

  const calculateRotation = (time) => {
    return time * 6;
  };

  const closeModal = () => {
    setShowModal(false);
    setIsRunning(false);
    alert(`Elapsed time: ${formatTime(time)}`);
    setTime(0);
  };

  return (
    <Container>
      <ShapeLeft src='/img/left-orange.svg' alt="top shape" />
      <ShapeRight src='/img/right-orange.svg' alt="top shape" />
      <TimerIcon>
        <ClockHand style={{ transform: `rotate(${calculateRotation(time)}deg)` }} />
        <TopLine />
        <SideLine />
      </TimerIcon>
      <TotalTime>오늘의 공강 : N시간 N분</TotalTime>
      <Time>{formatTime(time)}</Time>
      <TextContainer>
        <Text>타이머 켜야 인정돼요</Text>
        <Text>공강 시간이 끝나면 자동으로 종료돼요</Text>
        <Text><b>[ 종료 시간 - 시작시간 ]</b> 으로 측정돼요</Text>
        <Text>타이머 종료 후, 활동 카테고리를 선택할 수 있어요</Text>
      </TextContainer>
      <TimerController>
        <ControllerImg src="/img/timer-play.svg" alt="Play" onClick={handlePlay} />
        <ControllerImg src="/img/timer-pause.svg" alt="Pause" onClick={handlePause} />
        <ControllerImg src="/img/timer-quit.svg" alt="Quit" onClick={handleQuit} />
      </TimerController>
      <Navbar />
      <TimerStop open={showModal} onClose={closeModal} />
    </Container>
  );
}

export default Timer;
