import { useReducer } from "react"


const initialState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state = initialState, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default: throw new Error('Invalid action')
    }
}

export default function UseReducer(){

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    )
}