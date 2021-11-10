import UseContext from "./Hooks/UseContext"
import { useState } from "react"
import {ThemeContext} from './GlobalContext'


export default function Content(){
    const [theme, setTheme] = useState('light')
    
    return (
        <ThemeContext.Provider value={theme}>
            <div className='App'>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
                <UseContext />
            </div>
        </ThemeContext.Provider>
    )
}