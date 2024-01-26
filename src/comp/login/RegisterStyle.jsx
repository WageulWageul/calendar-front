import styled from "styled-components";
import { ReactComponent as Mascot } from '../../assets/img/Mascot.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media screen and (max-width:768px){
    flex-direction: column;
    
  }
`;

export const ImageContainer = styled.div`
  margin-left: 10px;
  @media screen and (max-width:768px){
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    height: 100vh;
  }
`;

export const Image = styled(Mascot)`
  
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width:768px){
    width: 60%;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  max-width : 100%;
`;

export const FormInput = styled.input`
  height: 60px;
  width: 400px;
  background-color: #f5f5f7;
  margin-bottom: 30px;
  border-radius: 10px;
  border: none;
  padding-left: 1em;
`;

export const TextStyle = styled.h1`
  color: #2f3367;
`;

export const LogInButton = styled.button`
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

export const SNSButton = styled.button`
  width: 195px;
  height: 54px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
`;
