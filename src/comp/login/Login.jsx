import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Mascot } from '../../assets/img/Mascot.svg';
import { ReactComponent as Kakao } from '../../assets/img/kakao.svg';
import { ReactComponent as Naver } from '../../assets/img/naver.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media screen and (max-width:768px){
    flex-direction: column;
    
  }
`;

const ImageContainer = styled.div`
  margin-left: 10px;
  @media screen and (max-width:768px){
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    height: 100vh;
  }
`;

const Image = styled(Mascot)`
  
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width:768px){
    width: 60%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  max-width : 100%;
`;

const FormInput = styled.input`
  height: 60px;
  width: 400px;
  background-color: #f5f5f7;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
`;

const TextStyle = styled.h1`
  color: #2f3367;
`;

const LogInButton = styled.button`
  width: 150px;
  height: 67px;
  background-color: #007dfa;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  @media screen and (max-width:768px){
    width: 400px;
  }
`;

const SNSButton = styled.button`
  width: 195px;
  height: 54px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  font-size: 15px;
`;

function Login(props) {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => [
      ...prevUserData,
      {
        name: { name },
        email: { email },
      },
    ]);
    console.log({ userData });
  };

  const handleKakaoLogin = (e) => {
    // 처리
  };

  const handleNaverLogin = (e) => {
    // 처리
  };

  return (
    <Container>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <TextContainer>
        <TextStyle>Welcome!</TextStyle>
        <p style={{ color: '#2F3367' }}>로그인하는데 필요한 정보를 입력해주세요!</p>

        <form onSubmit={onSubmit}>
          <label>
            <FormInput
              type="text"
              value={name}
              onChange={onChangeName}
            />
          </label>
          <br />
          <label>
            <FormInput
              type="text"
              value={email}
              onChange={onChangeEmail}
            />
          </label>
          <br />
          <SNSButton
            onClick={handleKakaoLogin}
            style={{ backgroundColor: '#FEE500', marginRight: '10px' }}
          >
            <Kakao style={{ float: 'left' }} />
            카카오 로그인
          </SNSButton>
          <SNSButton
            onClick={handleNaverLogin}
            style={{ backgroundColor: '#03C75A' }}
          >
            <Naver style={{ float: 'left' }} />
            네이버 로그인
          </SNSButton>
          <br />
          <Link to="/">
            <div style={{ textAlign: 'right' }}>
              <LogInButton type="submit">로그인</LogInButton>
            </div>
          </Link>
        </form>
        <hr style={{ color: '#ECECF0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ textAlign: 'left', color: '#2F3367' }}>아이디가 없으신가요</p>
          <p style={{ textAlign: 'right', color: '#007DFA' }}>회원가입하기!</p>
        </div>
      </TextContainer>
    </Container>
  );
}

export default Login;
