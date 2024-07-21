import React, { useEffect } from 'react';
import styled from 'styled-components';
import initialImage from '../components/assets/logo.svg'; // Ensure you have the correct path to your image
import rightOrangeImage from '../components/assets/right-orange.svg';
import leftOrangeImage from '../components/assets/left-orange.svg';

const InitialScreen = ({ setShowInitialScreen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialScreen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setShowInitialScreen]);

  return (
    <InitialScreenContainer>
      <BackgroundImage src={rightOrangeImage} alt="Right Orange" position="top-right" />
      <StyledImage src={initialImage} alt="Initial Screen" />
      <BackgroundImage src={leftOrangeImage} alt="Left Orange" position="bottom-left" />
      <TextContainer>
        <SubText>'東時'</SubText>
        <Description>동국대의 시간이 흐른다</Description>
      </TextContainer>
    </InitialScreenContainer>
  );
};

// Styled-components
const InitialScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFDA69;
  text-align: center;
  width: 100%;
  max-width: 500px; 
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 50%;  /* Adjust this to control the size of the main logo */
  height: auto;
  margin: 20px 0; /* Add some margin to separate it from other elements */
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 40%;  /* Adjusted this to increase the size of the background images */
  ${({ position }) => position === 'top-right' && `
    top: 0;
    right: 0;
  `}
  ${({ position }) => position === 'bottom-left' && `
    bottom: 0;
    left: 0;
  `}
`;

const TextContainer = styled.div`
  text-align: center;
`;


const SubText = styled.h2`
  font-size: 1rem;  /* Adjust the font size */
  color: #555555;  /* Adjust the color */
  margin: 0;
  padding:0px;
`;

const Description = styled.p`
  font-size: 1rem;  /* Adjust the font size */
  color: #555555;  /* Adjust the color */
  padding:10px;
  margin:0px;
`;

export default InitialScreen;
