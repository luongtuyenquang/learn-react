import { SET_INPUT_TODO, ADD_TODO, DELETE_TODO } from './constants'

const initialState = {
    inputTodo: '',
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INPUT_TODO:
            return {
                ...state,
                inputTodo: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const newTodo = [...state.todos]
            newTodo.splice(action.payload, 1)

            return {
                ...state,
                todos: newTodo
            }
        default:
            throw new Error('Invalid Action')
    }

}

export { initialState }
export default reducer