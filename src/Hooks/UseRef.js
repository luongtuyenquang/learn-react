import { useRef } from "react"
import ForwardRef from "./ForwardRef"

export default function UseEffect(){

   const videoRef = useRef()

    return (
        <div className='App'>
           <ForwardRef ref={videoRef}/>
           
           <button onClick={() => videoRef.current.play()}>Play</button>
           <button onClick={() => videoRef.current.pause()}>Pause</button>
        </div>
    )
} 