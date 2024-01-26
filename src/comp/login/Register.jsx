import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ReactComponent as Mascot} from "../../assets/img/Mascot.svg";
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
  flex: 1.5;
  @media screen and (max-width:1200px){
    flex:1;
  }
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
  flex:1;
  padding: 5em;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  @media screen and (max-width:1200px){
    flex:1.5;
  }
`;

const FormInput = styled.input`
  height: 60px;
  width: 90%;
  background-color: #f5f5f7;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  padding-left: 1em;
`;

const TextStyle = styled.h1`
  color: #2f3367;
`;

const LogInButton = styled.button`
  width: 35%;
  height: 67px;
  background-color: #007dfa;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 1.25em;
  margin-right: 10%;

  @media screen and (max-width:768px){
    width: 400px;
  }
`;

const SNSButton = styled.button`
  width: 44%;
  height: 54px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;

function Register(props) {
    const [userData, setUserData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
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
                    name: {name},
                    email: {email},
                    pw: {pw},
                },
            ];
        });
        console.log({userData});
    };

    const handlekakaoLogin = (e) => {
        //처리
    };
    const handlenaverLogin = (e) => {
        //처리
    };

    return (
<Container>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <TextContainer>
        <TextStyle>Welcome!</TextStyle>
        <p style={{ color: '#2F3367' }}>회원가입하는데 필요한 정보를 입력해주세요!</p>

                <form onSubmit={onSubmit}>
                    <label>
                        <FormInput
                            placeholder="이름"
                            type="text" 
                            value={name} 
                            onChange={onChangeName}
                        />
                    </label>
                    <br />
                    <label>
                        <FormInput
                            placeholder="이메일"
                            type="text" 
                            value={email} 
                            onChange={onChangeEmail}
                        />
                    </label>
                    <br/>
                    <label>
                        <FormInput
                        placeholder="비밀번호"
                            type="password" 
                            value={pw} 
                            onChange={onChangePw}
                        />
                    </label>
                    <br />
                    <SNSButton
                        onClick={handlekakaoLogin}
                        style={{ backgroundColor: '#FEE500', marginRight: '10px' }}
                         >
                        <Kakao style={{ float: 'left' }} />
                        카카오 로그인
                    </SNSButton>
                    <SNSButton
                        onClick={handlenaverLogin}
                        style={{ backgroundColor: '#03C75A' ,color: '#ffffff'}}
                        >
                        <Naver style={{ float: 'left', }} />
                        네이버 로그인
                    </SNSButton>
                    <br />
                    <div style={{textAlign: 'right'}}>
                    <Link to='/login'>
                    <LogInButton type="submit">회원가입</LogInButton>
                    </Link>
                    </div>
                    
                </form>
                <hr style={{color: '#ECECF0' ,marginRight:'10%'}}/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ textAlign: 'left', color: '#2F3367' }}>이미 아이디가 있으신가요?</p>
                    <Link to='/login' style={{ textDecoration: "none" ,marginRight:'10%'}}>
                    <p style={{ textAlign: 'right', color: '#007DFA' }}>로그인하기!</p>
                    </Link>
                    </div>
      </TextContainer>
    </Container>        
    );
}

export default Register;