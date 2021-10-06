// import logo from './logo.svg';
// import './App.scss';
import { Component, useState } from 'react';
import ToDoList from './hooks/TodoList';
import ToDoForm from './hooks/ToDoForm';

function Test(){
    const [toDoList, setToDoList] = useState([
        {id: 1, title: 'Nguyễn Văn A', age: 21},
        {id: 2, title: 'Nguyễn Văn B', age: 22},
        {id: 3, title: 'Nguyễn Văn C', age: 23},
    ])
    function handleClick(data){
        const newToDoList = [...toDoList]
        const index = newToDoList.findIndex((todo) => {
            return todo.id === data.id
        })
        newToDoList.splice(index, 1)
        setToDoList(newToDoList)
    }
    function handleSubmit(data){
        const newData = {
            id: toDoList.length + 1,
            ...data
        }
        const newToDoList = [...toDoList]
        newToDoList.push(newData)
        setToDoList(newToDoList)

    }
    return (
        <div>
            <ToDoForm submit={handleSubmit}/>
            <ToDoList todos={toDoList} toDoClick={handleClick} />
        </div>
    )
}

export default Test;
