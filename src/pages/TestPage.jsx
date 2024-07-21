import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import api from "../axios";
import CustomButton from "../components/.PublicComp/CustomButton";
import CustomInput from "../components/.PublicComp/CustomInput";

function TestPage() {
    return (
        <div>
            <CustomButton>Test Page</CustomButton>
            <CustomInput label={"label"} placeholder="Enter your username"></CustomInput>
        </div>
    );
}

export default TestPage;