import { createContext, useState } from "react"
import Paragrap from "./Paragrap";

export const ThemeContext = createContext()

function ThemeProvider(){
    const [theme, setTheme] = useState('light')
    const ToogleThemeFunc = () =>{
        setTheme(theme==='dark'?'light':'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={ToogleThemeFunc}>Toogle theme</button>
            <Paragrap />
        </ThemeContext.Provider>
    )
}

export default ThemeProvider