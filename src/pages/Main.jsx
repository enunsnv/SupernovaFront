import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {userIDState} from "../atom/atom";
import api from "../axios";

function Main() {
    const [userID] = useRecoilState(userIDState);

    return (
        <div>
            <p>UserID: {userID}</p>
        </div>
    );
}

export default Main;
