import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect: Timer (setTimeOut, setInterval)
   const [show, setShow] = useState(false)
   const [countdown, setCountDown] = useState(10)

    const handleClick = () => {
        setShow(!show)
    }

    useEffect(() => {
        const clearTimer = setInterval(() => {
            if(countdown === 0) setCountDown(10)
            else setCountDown(countdown - 1)
        }, 1000)
        return () => {
            clearInterval(clearTimer)
        }
    }, [countdown])

    return (
        <div className='App'>
            <button onClick={handleClick}>{show === false ? 'Hiện' : 'Ẩn'}</button>
           {show && <h1>{countdown}</h1>}
        </div>
    )
} 