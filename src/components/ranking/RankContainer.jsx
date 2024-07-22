import React, { useState } from 'react';
import styled from 'styled-components';
import PeopRank from "./peoprank";
import CategoryRank from "./categoryrank";

const AllContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    width: 100%;
    max-width: 400px;
    margin: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CenterAlligner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
  background-color: #FEFEFE;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffa500;
  margin-bottom: 10px;
  text-align: center;
  width: 85%;
`;

const RankContainer = () => {

return (
    <AllContainer>
    <CenterAlligner>
    <span>동시 랭킹</span>
    <PeopRank>
    </PeopRank>
    </CenterAlligner>

    <CenterAlligner>
    <span>가장 많은 동시 활동</span>
    <Container>
        <CategoryRank />
    </Container>
    </CenterAlligner>
    </AllContainer>
);
}

export default RankContainer;