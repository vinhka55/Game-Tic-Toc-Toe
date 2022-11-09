

function Tutorial(){
    return (
        <div className="content-tutorial-game">
            <p>      	
You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!
            </p>
            <p>
            Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.
            </p>
            <h2>RULES FOR TIC-TAC-TOE</h2>
            <ol>
                <li>The game is played on a grid that's 3 squares by 3 squares.</li>
                <li>You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.</li>
                <li>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
                <li>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</li>
            </ol>
            <h2>
            HOW CAN I WIN AT TIC-TAC-TOE?
            </h2>
            <p>To beat the computer (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.</p>
            <p>Part of your strategy is trying to figure out how to get three Xs in a row. The other part is trying to figure out how to stop the computer from getting three Os in a row.</p>
            <p>After you put an X in a square, you start looking ahead. Where's the best place for your next X? You look at the empty squares and decide which ones are good choices—which ones might let you make three Xs in a row.</p>
            <p>You also have to watch where the computer puts its O. That could change what you do next. If the computer gets two Os in a row, you have to put your next X in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.</p>
            <p>If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.</p>
            <small>©2000 <a href="">The Exploratorium</a></small>
        </div>
    )
}

export default Tutorial