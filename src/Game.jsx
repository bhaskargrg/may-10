import React, { useState } from 'react'
import Board from './Board'

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentmoves, setCurrentmoves] = useState(0);
  const currentSquares=history[currentmoves];


  function handlePlay(nextSquares){
      const nextHistory=([...history.slice(0,currentmoves+1),nextSquares]);
      setHistory(nextHistory);
      setCurrentmoves(nextHistory.length - 1);
      setXIsNext(!xIsNext);

  }
  function jumpTo(nextMove){
    setCurrentmoves(nextMove);
    setXIsNext(nextMove%2==0);
  }
  const  moves=history.map((squares,move)=>{
    let description;
    if(move>0){
      description="go to #"+move;
    }
    else{
      description="go to game start";
    }
    return (<li key={move}>
      <button onClick={()=>jumpTo(move)}>{description}</button>
    </li>)
  })
  return (
    <div className='game'>
      <div className="game-board">
        <Board onPlay={handlePlay} xIsNext={xIsNext} squares={currentSquares}/>
        {/* <h1>hey</h1> */}
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game