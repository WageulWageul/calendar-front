import React, {useEffect, useState} from 'react';
import {ReactComponent as CloseIcon} from '../../assets/icon/Close.svg';
import TodoCalendar from './TodoCalendar';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

function TodoCreate( element,setComplete,) {
    const [userTodo, setUserTodo] = useState([]);
    const [title, setTitle] = useState("");
    const [memo, setMemo] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    //리스트객체
    const [todoList, setList] = useState([{
        id: '',
        title: '',
        memo: '',
        date: '',
        day:''
    }]);

    // 백엔드단에서 리스트 객체를 가져오는 부분
    useEffect(() => {
        axios.get("/todo/list")
            .then(res => setList(res.data.todoList))
            .catch(error => console.log(error))
    }, []);

    const onWriteTitle = (e) => {
        setTitle(e.target.value);
    };

    const onWriteMemo = (e) => {
        setMemo(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setUserTodo((userTodoData) => {
            return [
                ...userTodoData,
                {
                    title: {title},
                    memo: {memo},
                    date: selectedDate,
                },
            ];
        });
        if (title === "" && memo === ""){
            alert("내용을 입력하세요");
        }
        else{
            alert("제목 : " + title + "메모 : " + memo);
            setTitle("");
            setMemo("");
            setSelectedDate(new Date());
            window.location.replace("/");
            console.log({userTodo});
        }
    };

    const openCalendar = () => {
        setIsCalendarOpen(true);
      };
    
      const closeCalendar = () => {
        setIsCalendarOpen(false);
      };
    
      const handleCalendarSelect = (date) => {
        setSelectedDate(date);
        closeCalendar();
      };    

    return (
        <TodoBack>
            <TodoFrame>
            <Header>
            <CloseIcon onClick={() => window.location.replace("/")} />
            </Header>
            <DateFrame>
            <TodoDate onClick={openCalendar}>
                {moment(selectedDate).format('YYYY년 MM월 DD일')}
            </TodoDate>
            <TodoTime>시간 :  09 : 30</TodoTime>
            </DateFrame>
            <TodoTitle
                placeholder="제목"
                type="text" 
                value={title} 
                onChange={onWriteTitle}
            />
            <TodoMemo
                type="text" 
                value={memo} 
                onChange={onWriteMemo}
            />
            <TodoSubmit onClick={onSubmit}>확인</TodoSubmit>
            </TodoFrame>
            {isCalendarOpen && (
             <TodoCalendar onSelectDate={handleCalendarSelect} />
             )}
        </TodoBack>
    );
}

export default TodoCreate;

const Header = styled.div`  
    display : flex;
    justify-content: flex-end;
    width : 100%;
    `;

const TodoBack = styled.div`
    display:flex;
    justify-content:center;
    align-items: center; 
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);  
    `;

const TodoFrame = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; 
    width:300px;
    height: 70%;
    border-radius : 3em;
    background-color:#ffffff;
    padding: 3em 2.5em;
    `;

const DateFrame = styled.div`
    width : 100%;
    display:flex;
    flex-direction: column;
    `;
const TodoDate = styled.div`
    font-size: 2em;
    font-weight: 700;
    `;

const TodoTime = styled.div`
    font-size: 1.025em;
    margin-top : 0.5em;
    `;

const TodoTitle = styled.input`
    width: 100%;
    height : 10%;
    border-radius : 3em;
    background-color:#E6E7F0;
    padding-left : 1em;
    border : none;
    `;

const TodoMemo = styled.textarea`
    width: 100%;    
    height : 50%;
    border-radius : 3em;
    background-color:#E6E7F0;
    border : none;
    padding : 1.5em;
    resize: none;
    `;

const TodoSubmit = styled.div`
    display : flex;
    justify-content:center;
    align-items: center; 
    text-align : center;
    width: 25%;    
    height : 8%;
    border-radius : 3em;
    background-color:#208DFB;
    color:#ffffff;
    `;

