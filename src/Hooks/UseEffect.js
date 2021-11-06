import { useEffect, useState } from "react"

export default function UseEffect(){

    // useEffect: Resize
   const [widthScreen, setWidthScreen] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidthScreen(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='App'>
           <h1>{widthScreen}</h1>
        </div>
    )
} 