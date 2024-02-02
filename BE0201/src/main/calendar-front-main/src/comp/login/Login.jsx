import React, { useState } from 'react';
import * as t from './RegisterStyle';
import { ReactComponent as Kakao } from '../../assets/img/kakao.svg';
import { ReactComponent as Naver } from '../../assets/img/naver.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    const handleLogin = () => {
        axios.post('api/login', { email, pw })
            .then(response => {
                if (response.data.success) {
                    window.location.href = '/';
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error("Error during login:", error);
            });
    };

    return (
        <t.Container>
            <t.ImageContainer>
                <t.Image />
            </t.ImageContainer>
            <t.TextContainer>
                <t.TextStyle>Welcome!</t.TextStyle>

                <p style={{ color: '#2F3367' }}>이메일과 비밀번호를 입력해주세요!</p>

                <form>
                    <label>
                        <t.FormInput
                            placeholder="이메일"
                            type="text"

                            onChange={onChangeEmail}
                        />
                    </label>
                    <br />
                    <label>
                        <t.FormInput
                            placeholder="비밀번호"
                            type="password"

                            onChange={onChangePw}
                        />
                    </label>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '25rem',margin: '0 auto', flexDirection: 'row' }}>

                        <t.SNSButton>
                            <Kakao style={{ float: 'left' }}/>
                            카카오 로그인
                        </t.SNSButton>

                        <t.SNSButton
                            style={{ backgroundColor: '#03C75A' ,color: '#ffffff'}}
                        >
                            <Naver style={{ float: 'left' }} />
                            네이버 로그인
                        </t.SNSButton>
                    </div>
                    <br />
                    <t.LogInButton type="submit" onClick={handleLogin}>로그인</t.LogInButton>

                </form>
                <hr style={{ color: '#ECECF0', marginRight: '4%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ textAlign: 'left', color: '#2F3367' }}>아이디가 없으신가요</p>
                    <Link to='/register' style={{ textDecoration: "none", marginRight:'4%'}}>
                        <p style={{ textAlign: 'right', color: '#007DFA'}}>회원가입하기!</p>
                    </Link>
                </div>
            </t.TextContainer>
        </t.Container>
    );
}

export default Login;