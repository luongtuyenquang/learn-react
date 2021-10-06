// import logo from './logo.svg';
// import './App.scss';
import { Component, useState } from 'react';
import ToDoList from './TodoList';

function ToDoForm(props){
    const [value, setValue] = useState('')
    function handleChange(e){
        setValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const formValue = {
            title: value
        }
        props.submit(formValue)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleChange}></input>
        </form>
    );
}
export default ToDoForm;
