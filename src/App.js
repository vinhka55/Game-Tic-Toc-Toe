import TodoApp from './Component/Todo';
import ThemeProvider from './Component/ThemeContext';
import './App.css'
import TicTacToe from './Component/TicTacToe';

function App() {
    return (

        <div>
            {/* <ThemeProvider /> */}
            <TicTacToe />
        </div>
    )
}
export default App;
