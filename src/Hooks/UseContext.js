import { useContext, useRef } from "react"
import GlobalContext from "../store/GlobalContext"
import { setInputTodo, addTodo, deleteTodo } from "../store/actions"

export default function UseContext(){

    const [state, dispatch] = useContext(GlobalContext)
    const inputRef = useRef()
    
    const {inputTodo, todos} = state

    const handleSubmit = () => {
        dispatch(addTodo(inputTodo))
        dispatch(setInputTodo(''))
        inputRef.current.focus()
    }

    return (
        <div className='App'>
            <input type='text' 
                value={inputTodo}
                onChange={(e) => dispatch(setInputTodo(e.target.value))}
                ref={inputRef}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
               {
                   todos.map((todo, index) => {
                       return (
                            <li key={index}>
                                {todo}
                                <span style={{cursor: "pointer"}} onClick={() => dispatch(deleteTodo(index))}> X</span>
                            </li>
                       )
                   })
               }
            </ul>
        </div>
    )
}