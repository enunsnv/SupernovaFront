import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import axios from 'axios';
import SubmitIcon from '../components/assets/submit.svg';
import SolveTop from '../components/assets/solve_top.svg';
import Navbar from '../components/navigation/Navbar';
import StaffConfirm from '../components/modal/staffconfirm';
import StaffSuccess from '../components/modal/staffsuccess';
import api from "../axios";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
`;

const Section = styled.div`
  margin-bottom: 20px;
  width: 90%;
`;

const QuestionHeader = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const QuestionTextarea = styled.textarea`
  height: 130px;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #ffa500;
  background-color: #F5F5F5;
  width: 96%;
  margin-bottom: 40px;
`;

const AnswerHeader = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  color: gray;
`;

const AnswerContainer = styled.div`
  position: relative;
  width: 95%;
  height: 235px;
`;

const AnswerTextarea = styled.textarea`
  height: 130px;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #ffa500;
  background-color: #F5F5F5;
  width: 100%;
  margin-bottom: 20px;
`;

const TitleTextarea = styled.textarea`
  height: 50px;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #ffa500;
  background-color: #F5F5F5;
  width: 96%;
  margin-bottom: 10px;
`;

const SubmitButton = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 10px;
  right: -20px;
  cursor: pointer;
`;

const StaffPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleSubmit = () => {
    setIsSubmitModalOpen(true);
  };

  const handleCloseSubmitModal = () => {
    setIsSubmitModalOpen(false);
  };

  const handleSuccess = async () => {
    try {
      const payload = {
        title,
        content: question,
        answer,
        password,
      };

      await api.post('/createquiz/', payload);
      setIsSubmitModalOpen(false);
      setIsFinalModalOpen(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  const handleCloseFinalModal = () => {
    setIsFinalModalOpen(false);
  };

  return (
      <AppContainer>
        <ReactSVG src={SolveTop} />
        <Section>
          <QuestionHeader>문제 제목을 입력해주세요.</QuestionHeader>
          <TitleTextarea
              value={title}
              onChange={handleTitleChange}
              placeholder="제목을 입력하세요"
          />
        </Section>
        <Section>
          <QuestionHeader>문제를 작성해주세요.</QuestionHeader>
          <QuestionTextarea
              value={question}
              onChange={handleQuestionChange}
              placeholder="문제를 입력하세요"
          />
        </Section>
        <Section>
          <AnswerHeader>답안을 작성해주세요.</AnswerHeader>
          <AnswerContainer>
            <AnswerTextarea
                value={answer}
                onChange={handleAnswerChange}
                placeholder="답안을 입력하세요"
            />
            <SubmitButton src={SubmitIcon} onClick={handleSubmit} />
          </AnswerContainer>
        </Section>
        <Navbar />
        {isSubmitModalOpen && (
            <StaffConfirm onClose={handleCloseSubmitModal} onSuccess={handleSuccess} onPasswordChange={handlePasswordChange} />
        )}
        {isFinalModalOpen && <StaffSuccess onClose={handleCloseFinalModal} />}
      </AppContainer>
  );
};

export default StaffPage;
