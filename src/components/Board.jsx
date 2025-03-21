import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";


const Square = (({value, onSquareClick, redHighlights, greenHighlights, color}) =>{
    return <button onClick={onSquareClick} className={`flex justify-center items-center text-3xl font-black border-r border-t border-[#999] h-25 w-25 ${redHighlights? 'text-red-600':  color} ${greenHighlights? 'text-green-600' : color} hover:cursor-pointer`} >{value}</button>
  })
  
function Board({ turn, squares, onPlay, color }){
  // const [turn, setturn] = useState(true)
  // const [squares, setsquares] = useState(Array(9).fill(null))
  function handleClick(i){
    const updatedSquares = squares.slice()
    if(theWinner(squares) || squares[i]){
      return
    }
    updatedSquares[i] = turn ? "X" : "O"
    onPlay(updatedSquares)
  }


  function theWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return {
            wonBy: squares[a],
            redLine: squares[a] == 'X'? [a,b,c]: [],
            greenLine: squares[a] == 'O'? [a,b,c]: []
          }; // Return the winner ('X' or 'O')
      }
    }

    return null; // Return null if there's no winner yet
  }

  const winner = theWinner(squares)
  const redWinningLines = winner? winner.redLine : []
  const greenWinningLines = winner? winner.greenLine : []
  let {status, statusColour} = winner
  ?{
    status: "Winner: " + winner.wonBy,
    statusColour: winner.wonBy =='X'? 'text-red-600':'text-green-600'
  }
  :{
    status: "Next player: " + (turn ? "X" : "O"),
    statusColour: 'text-[#999]'
  }
  return (
  <>
  < div className={`text-center text-2xl ${statusColour}`}>{status}</div>
    <div className='grid grid-cols-3 gap-0 border border-[#999] last:border-t-0 last:border-r-0'>
        {squares.map((value, index)=>(
          <Square 
            key={index} 
            value={value} 
            onSquareClick={()=>  handleClick(index)}
            redHighlights={redWinningLines.includes(index)}
            greenHighlights={greenWinningLines.includes(index)}
            color={color}
          />
        ))}
        
        
    </div>
  </>
  )
}

export default Board


