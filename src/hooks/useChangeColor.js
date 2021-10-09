import { useState } from "react"
import { useEffect } from "react"

function randomColor(){
    const LIST_COLOR = ['blueviolet', 'green', 'aquamarine', 'yellow', 'deeppink', 'brown', 'cadetblue', 'chocolate', 'coral']

    const random = Math.random() * LIST_COLOR.length
    const newColor = LIST_COLOR[Math.floor(random)]
    return newColor
}

 export function useChangeColor(){
    
    const [color, setColor] = useState('')
    
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor()
            setColor(newColor)
        }, 1000)
        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return color
}
