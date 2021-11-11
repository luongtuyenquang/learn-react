import { SET_INPUT_TODO, ADD_TODO, DELETE_TODO } from './constants'

const setInputTodo = payload => {
    return {
        type: SET_INPUT_TODO,
        payload
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export { setInputTodo, addTodo, deleteTodo }
