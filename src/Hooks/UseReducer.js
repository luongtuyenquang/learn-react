import { useReducer, useRef } from "react"

// Khởi tạo
const initialState = {
    inputJob: '',
    jobs: []
}

// Constants
const SET_INPUT_JOB = 'set_input_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setInputJob = payload => {
    return {
        type: SET_INPUT_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INPUT_JOB:
            return {
                ...state,
                inputJob: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default: throw new Error('Invalid Action')
    }
}

export default function UseReducer(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(state.inputJob))
        dispatch(setInputJob(''))
        inputRef.current.focus()
    }
    
    return (
        <div style={{margin: 20}}>
            <input type='text' ref={inputRef} value={state.inputJob} onChange={(e) => dispatch(setInputJob(e.target.value))} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    state.jobs.map((job, index) => {
                        return (
                            <li key={index}>
                                {job}
                                <span style={{cursor: "pointer", marginLeft: 10}} onClick={() => dispatch(deleteJob(index))}>X</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}