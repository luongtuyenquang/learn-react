import { useContext, useEffect, useRef, useState } from "react"
import { CouterContext } from "../context/MyGlobalContext"

export function Couter(){
    
    const couter = useContext(CouterContext)
    

    return (
        <div>
            <h2>Value Current: {couter.number}</h2>
            <button onClick={couter.increaseNumber}>Increase</button>
        </div>
    )
}