import { useCallback, useState } from "react"
import Content from "../Content"

export default function UseCallback(){
    
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <Content onIncrease={handleIncrease} />
        </>
    )
}