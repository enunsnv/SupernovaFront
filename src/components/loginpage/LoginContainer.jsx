import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import CustomInput from "../.PublicComp/CustomInput";
import CustomButton from "../.PublicComp/CustomButton";

function LoginContainer() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if (nickname === '' || password === '') {
            alert('닉네임과 식별번호를 입력해주세요.');
            return;
        }
        alert(`nick: ${nickname}\nPassword: ${password}`);
    }

    return (
        <div>
            <Form>
                <CustomInput
                    label="닉네임"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <CustomInput
                    label="식별번호"
                    placeholder="식별번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CustomButton onClick={login}>로그인</CustomButton>
            </Form>
        </div>
    );
}

export default LoginContainer;
