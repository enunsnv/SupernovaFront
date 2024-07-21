import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #F27200;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

const Item = styled.div`
  background-color: ${({ selected }) => (selected ? '#F5F5F5' : '#F5F5F5')};
  border: ${({ selected }) => (selected ? '2px solid #FFDA69' : '2px solid #ccc')};
  border-radius: 10px;
  height: 100px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
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

const SelectContainer = ({ onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleSelectClick = () => {
    if (onSelect) {
      onSelect(selectedItem);
    }
  };

  return (
    <Container>
      <Grid>
        {[1, 2, 3, 4].map((item, index) => (
          <Item
            key={index}
            selected={selectedItem === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </Grid>
      <Button onClick={handleSelectClick}>펫 선택</Button>
    </Container>
  );
};

export default SelectContainer;
