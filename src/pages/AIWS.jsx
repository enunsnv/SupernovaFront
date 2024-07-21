import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/navigation/Navbar';
import { ReactSVG } from 'react-svg';
import SubmitIcon from '../components/assets/submit.svg';
import SolveTop from '../components/assets/solve_top.svg';
import ChallengeSubmit from '../components/modal/challengesubmit'; // Modal 컴포넌트를 import 합니다.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
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

const QuestionText = styled.div`
  background-color: #F5F5F5;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffa500;
  margin-bottom: 10px;
  text-align: left;
`;

const QuestionAuthor = styled.div`
  font-size: 14px;
  color: #BBBBBB;
  text-align: right;
  margin-bottom: 20px;
`;

const InstructionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Instructions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
    text-align: left;
    font-size: 15px;
    color: gray;
  }
  
  span {
   color: orange;
  }
`;

const AnswerTitle = styled.div`
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
  margin-bottom: 40px;
`;

const SubmitButton = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 10px;  /* Adjust as needed */
  right: -20px;  /* Adjust as needed */
  cursor: pointer;
 
`;

function AIWS() {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    setIsModalOpen(false);
    console.log('Submitted answer:', answer);
  };

  return (
    <Container>
      <ReactSVG src={SolveTop} />
      <Section> 
        <QuestionHeader>이번 주 문제!</QuestionHeader>
        <QuestionText>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin quam iaculis mauris egestas mattis.
          Semper tincidunt elementum consequat ut purus cursus est nulla quam. Lacus consequat in
          faucibus tincidunt mauris. Ipsum ultrices dignissim erat posuere sem enim eu?
        </QuestionText>
        <QuestionAuthor>문제 제공: 김동우 교수님</QuestionAuthor>
        <InstructionsContainer>
          <Instructions>
            <li>⦁ 문제는 매주 업데이트되며 한 주 간 제공돼요</li>
            <li>⦁ 문제의 정답을 맞히면 <span>Exp +N</span></li>
            <li>⦁ 시도만 해도 <span>Exp +N</span></li>
          </Instructions>
        </InstructionsContainer>
      </Section>
      <Section>
        <AnswerTitle>답안 입력</AnswerTitle>
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

      <ChallengeSubmit
        show={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        answer={answer}
      />
    </Container>
  );
}

export default AIWS;
