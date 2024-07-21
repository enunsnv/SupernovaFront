import React, { useState } from 'react';
import styled from 'styled-components';
import PeopRank from "./peoprank";
import CategoryRank from "./categoryrank";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    max-width: 400px;
    margin: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const RankContainer = () => {

return (
    <Container>
        <PeopRank />
        <CategoryRank />
    </Container>
);
}

export default RankContainer;