// import logo from './logo.svg';
import './App.scss';
import { Component, useState } from 'react';

function ColorBox(){
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color')
        return initColor
    })
    function handleClickBox(){
        const newColor = randomColor()
        setColor(newColor)
        localStorage.setItem('color', newColor)
    }
    function randomColor(){
        const COLOR_LIST = ['deeppink', 'yellow', 'green', 'black']
        const randomIndex = Math.floor(Math.random() * 4)
        return COLOR_LIST[randomIndex]
    }
    return (
        <div>
            <div 
                className='box-color'
                style={{backgroundColor: color}}
                onClick={handleClickBox}
            >
                <p className='box-color__text'>Click me</p>
            </div>
        </div>
    )
}

export default ColorBox;
