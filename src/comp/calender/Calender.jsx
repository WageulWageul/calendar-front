import React from 'react';
import styled from "styled-components";
import CalenderHeader from './CalenderHeader';
import CalenderDetail from './CalenderDetail';
import { ReactComponent as Plus } from '../../assets/icon/Plus.svg';


const Wrapper = styled.div`
    display: flex;
    width:100%;
    height:100vh;
    background-color:#E3E3E3`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    border-radius : 3em;
    background-color:#ffffff;
    margin:1em;
    padding:2em;
    `;

const PlusButton = styled.div`
    position: absolute;
    right: 1em;
    bottom: 1em;
    padding : 1em;
    display: flex;
    background-color: #007DFA;
    opacity : 0.85;
    border-radius : 50%;
    `;

function Calender(props) {
    return (
        <Wrapper>
            <InnerWrapper>
                <CalenderHeader></CalenderHeader>
                <CalenderDetail></CalenderDetail>
            </InnerWrapper>
            <PlusButton><Plus/></PlusButton>
        </Wrapper>
    )
}

export default Calender;