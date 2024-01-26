import React, { useState } from 'react';
import LoginStyle from "./LoginStyle.jsx";
import { Link } from "react-router-dom";
import { ReactComponent as Mascot} from "../../assets/img/Mascot.svg";
import { ReactComponent as Kakao} from "../../assets/img/kakao.svg";
import { ReactComponent as Naver} from "../../assets/img/naver.svg";

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
        <div style={LoginStyle.container}>
            <div style={LoginStyle.imageContainer}>
                <Mascot style={LoginStyle.image} ></Mascot>
            </div>
            <div style={LoginStyle.textContainer}>
                <h1 style={LoginStyle.textStyle}>Welcome!</h1>
                <p style={LoginStyle.textStyle}>회원가입하는데 필요한 정보를 입력해주세요!</p>

                <form onSubmit={onSubmit}>
                    <label>
                        <input
                            placeholder="이름"
                            type="text" 
                            value={name} 
                            onChange={onChangeName}
                            style={LoginStyle.formDesign}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            placeholder="이메일"
                            type="text" 
                            value={email} 
                            onChange={onChangeEmail}
                            style={LoginStyle.formDesign}
                        />
                    </label>
                    <br/>
                    <label>
                        <input
                        placeholder="비밀번호"
                            type="password" 
                            value={pw} 
                            onChange={onChangePw}
                            style={LoginStyle.formDesign}
                        />
                    </label>
                    <br />
                    <br />
                   
                    <div style={{textAlign: 'right'}}>
                    <Link to='/login'>
                        <button 
                            type="submit"
                            style={{...LoginStyle.logInButton, color: 'white', fontSize: '20px'}}
                            >회원가입
                        </button>
                        </Link>
                    </div>
                    
                </form>
                <hr style={{color: '#ECECF0'}}/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ textAlign: 'left', color: '#2F3367' }}>이미 아이디가 있으신가요?</p>
                    <Link to='/login' style={{ textDecoration: "none"}}>
                    <p style={{ textAlign: 'right', color: '#007DFA' }}>로그인하기!</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;