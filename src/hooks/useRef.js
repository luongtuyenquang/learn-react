import { useEffect, useRef, useState } from "react"

export function UserRef(){
    const [value, setValue] = useState(0)

    const valueRef = useRef()
    useEffect(() => {
        valueRef.current = value
    }, [value])
    function handleIncrease(){
        setValue(value + 1)
    }
    return (
        <div>
            <h2>Value Previous: {valueRef.current}</h2>
            <h2>Value Current: {value}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}