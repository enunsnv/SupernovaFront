import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from "../axios";
import LoginContainer from "../components/loginpage/LoginContainer";

function Login() {
    return (
        <LoginContainer/>
    );
}

export default Login;