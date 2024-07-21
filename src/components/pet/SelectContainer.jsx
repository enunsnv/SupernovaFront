import React, { useState } from 'react';
import './pet.css';
import Pet from "./pet";
import CustomButton from "../.PublicComp/CustomButton";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 310px;
    width: 310px;
    background-color: white;
    border: 1px solid #F27200;
    border-radius: 15px;
    padding: 0 5px;
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 18px;
  margin: 10px 0;
  border: 0px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  background-color: #F5F5F5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 110px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  max-width: 450px;
  padding: 15px 20px;
  margin-top: 10px;
  border: 0px solid #4CAF50;
  border-radius: 10px;
  background-color: #FFDA69;
  color: black;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #45a049;
  }
`;

const Footer = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  color: #777;

  a {
    color: #4CAF50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function SelectContainer({ onClick }) {
    const [selectedPet, setSelectedPet] = useState(null);

    const handlePetClick = (index) => {
        setSelectedPet(prevSelectedPet => (prevSelectedPet === index ? null : index));
    };

    const handleButtonClick = () => {
        if (selectedPet !== null) {
            onClick(selectedPet);
        } else {
            alert("pet을 선택해주세요");
        }
    };

    return (
        <Container>
            <div className="select-container">
                {[0, 1, 2, 3].map(index => (
                    <Pet
                        key={index}
                        onClick={() => handlePetClick(index)}
                        selected={selectedPet === index}
                    />
                ))}
            </div>
            <ButtonContainer>
                <Button onClick={handleButtonClick}>선택 완료</Button>
            </ButtonContainer>
        </Container>
    );
}
export default SelectContainer;
