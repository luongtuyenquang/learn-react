import { createStore } from 'redux'

const initState = {
    speed: 0,
    lastSpeed: 1
}

const action = [
    {
        type: 'CHANGE_SPEED',
        changeSpeed: 3,
        lastSpeed: 1
    },
    {
        type: 'TURN_ON',
    },
    {
        type: 'TURN_OFF',
    }
]

const CHANGE_SPEED = 'CHANGE_SPEED'
const TURN_ON = 'TURN_ON'
const TURN_OFF = 'TURN_OFF'

const reducer = (state = initState, action) => {
    switch (action.type){
        case CHANGE_SPEED:
            return {
                ...state,
                speed: action.changeSpeed,
                lastSpeed: action.changeSpeed
            }
        case TURN_ON:
            return {
                ...state,
                speed: state.lastSpeed
            }
        case TURN_OFF:
            return {
                ...state,
                speed: 0
            }
        default: return state
    }
    
}

const store = createStore(reducer)

store.dispatch({type: CHANGE_SPEED, changeSpeed: 2})
console.log('Change Speed:', store.getState());

store.dispatch({type: TURN_ON, speed: action.speed})
console.log('Turn ON:', store.getState());

store.dispatch({type: TURN_OFF})
console.log('Turn OFF:', store.getState());

store.dispatch({type: TURN_ON, speed: action.speed})
console.log('Turn ON:', store.getState());