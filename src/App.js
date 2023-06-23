import React from "react";
import { useState } from "react";

function Square({value, onSquareClick}){

  
  // function handleClick(){
  //   setValue('X'); 
  // }

  // return <button className="square"
  // onClick={onSquareClick}>
  //   {value}</button>

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {

  const[xisNext, setXIsNext] = useState(true);
  const[squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);

  let status;
  if (winner){
    status = "Winner: " + winner;
  } else{
    status = "Next player: " + (xisNext ? "X" : "O");
  }
  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xisNext){
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xisNext);
  }

  return (
    <div>
      <div className="status"> {status} </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
        
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}  />
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}  />
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
        
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
      </div>

    </div>

  );
  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i=0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;

  }



  // return (
  // // <button className="square">X</button>,
  // // <button className="square">X</button>

  // //Instead of the JSx syntax Error when using <> </ >, I decided by the help of StackOverflow
  // // to use <div> </div> instead...
  // <div> 
  // <div className="board-row">
  //   <button className="square">1</button>
  //   <button className="square">2</button>
  //   <button className="square">3</button>
  // </div>
  // <div className="board-row">
  //   <button className="square">4</button>
  //   <button className="square">5</button>
  //   <button className="square">6</button>
  // </div>
  // <div className="board-row">
  //   <button className="square">7</button>
  //   <button className="square">8</button>
  //   <button className="square">9</button>
  // </div>
  // </div>
  // );
}
