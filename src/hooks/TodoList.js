// import logo from './logo.svg';
// import './App.scss';
import { Component, useState } from 'react';

function ToDoList(props){
    const todos = props.todos
    const toDoClick = props.toDoClick
    function handleClick(todo) {
        toDoClick(todo)
    }
    const render = todos.map((todo) => {
        return (
            <ul key={todo.id}>
                <li onClick={() => handleClick(todo)}>{todo.title}</li>
            </ul>
        )
    })
    return (
        <div>
            {render}
        </div>
    )
}

export default ToDoList;
