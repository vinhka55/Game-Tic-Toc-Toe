import { useContext } from "react"
import {ThemeContext} from './index'

function Paragrap(){
    const theme = useContext(ThemeContext)
    console.log(theme);
    return (
        <div>       
            <p className={theme}>To use the extension, open the command palette F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.To use the extension, open the command palette F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.</p>
        </div>
    )
}

export default Paragrap
