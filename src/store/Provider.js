import { useReducer } from "react"
import GlobalContext from "./GlobalContext" 
import reducer, { initialState } from "./reducer"

function Provider({children}){

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return  <GlobalContext.Provider value={[state, dispatch]}>
                {children}
            </GlobalContext.Provider>
}

export default Provider