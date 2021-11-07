import { useRef, useState } from "react"

export default function UseEffect(){

    // useRef - Example: Start, Stop CountDown
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(60)
    const [status, setStatus] = useState(false)
    let timer = useRef()

    const handleClick = () => {
        setShow(!show)
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
        setStatus(true)
    }
    
    const handleStop = () => {
        clearInterval(timer.current)
        setStatus(false)
    }

    return (
        <div className='App'>
            <button onClick={handleClick}>{show === false ? 'Hiện' : 'Ẩn'}</button>
            {show && 
                <div>
                    <h3>{count}</h3>
                    <button onClick={status === false ? handleStart : handleStop}>{status === false ? 'Start' : 'Stop'}</button>
                </div>}
        </div>
    )
} 