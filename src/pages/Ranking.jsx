import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from "../axios";
import Navbar from '../components/navigation/Navbar';
import TimerStop from '../components/timer/TimerStop';
import RankContainer from "../components/ranking/RankContainer";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    background-color: #fff;
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
  font-size: 15px;
  margin-right: 12px;
`;

const TimerIcon = styled.div`
  position: relative;
  margin: 90px 0 30px;
  width: 100px;
  height: 100px;
  border: 2px solid #F27200;
  border-radius: 50%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ClockHand = styled.div`
  position: absolute;
  width: 2px;
  height: 30px;
  background-color: #F27200;
  top: 20px;
  left: 50%;
  transform-origin: bottom;
  transition: transform 0.1s linear;
`;

const TopLine = styled.div`
  position: absolute;
  width: 33px;
  height: 2px;
  background-color: #F27200;
  top: -18px;
  left: 34px;
  border-radius: 2px;
`;

const SideLine = styled.div`
  position: absolute;
  width: 27px;
  height: 2px;
  background-color: #F27200;
  top: 13px;
  right: -18px;
  transform: rotate(50deg);
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
  margin-top: 30px;
  margin-bottom: 10px;
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
  max-width: 250px;
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
  max-width: 250px;
  z-index: 2;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const TimerController = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`;

const ControllerImg = styled.img`
  cursor: pointer;
  width: 45px;
`;



function Ranking() {

    return (
        <AppContainer>
            <Header>
                <ShapeLeft src='/img/left-orange.svg' alt="top shape" />
                <ShapeRight src='/img/right-orange.svg' alt="top shape" />
            </Header>
            <RankContainer/>
            <Navbar />
        </AppContainer>
    );
}

export default Ranking;
