import { useState } from "react"

export default function UseState(){

    // Trường  hợp bình thường
    const [count, setCount] = useState(1)

    function handleIncrease(){
        setCount(count + 1)
    }

    // Trường hợp Initial State với Callback
    const price = [100, 200, 300]

    const [count, setCount] = useState(() => {
        const total = price.reduce((total, cur) => total + cur)
        return total
    })

    function handleIncrease(){
        setCount(count + 1)
    }

    // Trường hợp setState với Callback
    const [count, setCount] = useState({
        name: 'Luong Tuyen Quang',
        age: 23
    })

    function handleIncrease(){
        setCount(curState => ({
            ...curState,
            address: 'Da Lat'
        }))
    }

    return (
        <div className='App'>
            <h3>{count}</h3>
            <button onClick={handleIncrease}>increase</button>
        </div>
    )
} 