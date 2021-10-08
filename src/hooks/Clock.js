// import logo from './logo.svg';
// import './App.scss';
import { useEffect, useState, useRef } from 'react';

function Clock(props){
    const [time, setTime] = useState('')
    function formatDate(date){
        const hours = `0${date.getHours()}`.slice(-2)
        const minute = `0${date.getMinutes()}`.slice(-2)
        const second = `0${date.getSeconds()}`.slice(-2)
        return `${hours}:${minute}:${second}`
    }
    useEffect(() => {
        const removeInterval = setInterval(() => {
            const date = new Date()
            const newTimeString = formatDate(date)
            setTime(newTimeString)
        }, 1000)
        return () => {
            clearInterval(removeInterval)
        }
    }, [])
    return (
        <div>
            <form>
                <h3>Đồng hồ</h3>
                <p style={{fontSize:'35px'}}>{time}</p>    
            </form>
        </div>
    )
}

export default Clock;
