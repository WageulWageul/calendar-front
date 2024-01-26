import React, { useState } from 'react';
import * as t from './RegisterStyle';
import { Link } from 'react-router-dom';
import { ReactComponent as Kakao } from '../../assets/img/kakao.svg';
import { ReactComponent as Naver } from '../../assets/img/naver.svg';



function Login(props) {
  const [userData, setUserData] = useState([]);
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');


  const onChangeEmail = (e) => {
    setEmail(e.target.value);
};
const onChangePw = (e) => {
    setPw(e.target.value);
};

const onSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => {
        return [
            ...prevUserData,
            {
                email: {email},
                pw: {pw},
            },
        ];
    });
    console.log({userData});
};
  const handleKakaoLogin = (e) => {
    // 처리
  };

  const handleNaverLogin = (e) => {
    // 처리
  };

  return (
    <t.Container>
      <t.ImageContainer>
        <t.Image />
      </t.ImageContainer>
      <t.TextContainer>
        <t.TextStyle>Welcome!</t.TextStyle>
        <p style={{ color: '#2F3367' }}>이메일과 비밀번호를 입력해주세요!</p>

        <form onSubmit={onSubmit}>    
          <label>
            <t.FormInput
              placeholder="이메일"
              type="text" 
              value={email} 
              onChange={onChangeEmail}
            />
          </label>
          <br />
          <label>
            <t.FormInput
              placeholder="비밀번호"
              type="password" 
              value={pw} 
              onChange={onChangePw}
            />
          </label>
          <br />
          <t.SNSButton
            onClick={handleKakaoLogin}
            style={{ backgroundColor: '#FEE500', marginRight: '10px' }}
          >
            <Kakao style={{ float: 'left' }} />
            카카오 로그인
          </t.SNSButton>
          <t.SNSButton
            onClick={handleNaverLogin}

            style={{ backgroundColor: '#03C75A' ,color: '#ffffff'}}
          >
          <Naver style={{ float: 'left', }} />

            네이버 로그인
          </t.SNSButton>
          <br />

            <div style={{ textAlign: 'right' }}>
            <Link to="/">
              <t.LogInButton type="submit">로그인</t.LogInButton>
            </Link>
            </div>
         
        </form>
        <hr style={{ color: '#ECECF0', marginRight: '10%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ textAlign: 'left', color: '#2F3367' }}>아이디가 없으신가요</p>
          <Link to='/register' style={{ textDecoration: "none", marginRight:'10%'}}>
          <p style={{ textAlign: 'right', color: '#007DFA'}}>회원가입하기!</p>
          </Link>
        </div>
      </t.TextContainer>
    </t.Container>
  );
}

export default Login;
