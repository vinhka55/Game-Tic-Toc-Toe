import Cell from './Cell'

function Board(props){
    return (
        <div className="game-board">
        {
            props.board.map((item,index)=>{
                return <Cell key={index} value={item} onClick={()=>props.onClick(index)} className={`is-${item}`}/>
            })
        }
        </div>
    )
}

export default Board