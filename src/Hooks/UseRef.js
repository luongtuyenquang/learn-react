import { useRef } from "react"

export default function UseEffect(){

    // useRef - Example: Focus vào ô input khi click vào label
    const inputRef = useRef()

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div className='App'>
            <h3 onClick={handleFocus}>Nhập tên vào ô dưới đây:</h3>
            <input type='text' ref={inputRef} />
        </div>
    )
} 