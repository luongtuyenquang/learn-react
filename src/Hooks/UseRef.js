import { useEffect, useRef, useState } from "react"
import Memo from "../Memo"

export default function UseEffect(){

    // useRef - Example: Focus vào ô input khi click vào label
    const [count, setCount] = useState(10)
    const initialRef = useRef(count - 1)
    const countRef = useRef()

    useEffect(() => {
        if(count === 0){
            return clearInterval(countRef.current)
        }
    }, [count])

    const handleCountdown = () => {
        countRef.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
    }

    const handleReset = () => {
        setCount(initialRef.current + 1)
        handleCountdown()
    }
    
    return (
        <div className='App'>
            <h3>{count}</h3>
            <button 
                disabled={count <= initialRef.current && count > 0 } 
                onClick={count === 0 ? handleReset : handleCountdown}
            >
                {count === 0 ? 'Reset': 'Run'}
            </button>
            <Memo />
        </div>
    )
} 