import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftMonth } from "../../assets/icon/Left.svg";
import { ReactComponent as RightMonth } from "../../assets/icon/Right.svg";
import { ReactComponent as ProfileImg } from '../../assets/img/Profile.svg';

const HeaderFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Year = styled.div`
    font-size : 6em;
    font-weight : 700; 
    color : #2F3367;
    `;

const Month = styled.div`
    display : flex;
    align-items: center;
    font-size : 3.2em;
    font-weight : 500;
    color : #2F3367;
    margin-left : 1em;
    `;

const MonthList = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content: center;
    width : 40%;
    margin-left: 11em;
    background-color:#F5F5F7;
    border-radius : 3em;
    `;
const MonthButton = styled.div`
    font-weight: 600;
    font-size : 2.2em;
    color : #2F3367;
    margin : 0.25em 0.65em ;
    width : 6%;
    `;
const ProfileFrame = styled.div`
    display : flex;
    background-color:#F5F5F7;
    border-radius: 50%;
    padding: 0.5em;
    margin-left: 3em;
    `;


function CalenderHeader(props) {
    return (
        <HeaderFrame>
            <Year>2024</Year>
            <Month><LeftMonth/>3월<RightMonth/></Month>
            <MonthList>
            <MonthButton>1</MonthButton>
            <MonthButton>2</MonthButton>
            <MonthButton>3</MonthButton>
            <MonthButton>4</MonthButton>
            <MonthButton>5</MonthButton>
            <MonthButton>6</MonthButton>
            <MonthButton>7</MonthButton>
            <MonthButton>8</MonthButton>
            <MonthButton>9</MonthButton>
            <MonthButton>10</MonthButton>
            <MonthButton>11</MonthButton>
            <MonthButton>12</MonthButton>
            </MonthList>
            <ProfileFrame>
                <ProfileImg></ProfileImg>
            </ProfileFrame>
        </HeaderFrame>
    );
}

export default CalenderHeader;