import Board from "./Board"
import {caculateWinner} from '../../helper.js'
import {useState} from 'react'


function Home(){
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = caculateWinner(board)
    const handleClick = (index) =>{
        
        const newBoard = [...board]
        if(winner || newBoard[index]) return
        if(xIsNext) {
            newBoard[index] = 'X'
            setBoard(newBoard)
            setXIsNext(!xIsNext)
        }
        else {
            newBoard[index] = 'O'
            setBoard(newBoard)
            setXIsNext(!xIsNext)
        }
    }
    const resetGame = () =>{
        setBoard(Array(9).fill(null))
    }
    return(
        <div className='tictoctoe'>
            <Board board={board} onClick={handleClick}/>
            {
                winner && 
                <div className="text-winner">
                    {`Winner is ${winner}`}
                </div>
                }
            <button onClick={resetGame} className="reset-game">Reset game</button>
        </div>
    )
}

export default Home