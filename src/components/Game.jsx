import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
  const [history, sethistory] = useState([Array(9).fill(null)])
  const [currentMove, setcurrentMove] = useState(0)
  const currentSquare = history[currentMove]
  // const [turn, setturn] = useState(true)
  const turn = currentMove %2 == 0

  const handlePlay = (updatedSquares)=>{
    const pastMove = [...history.slice(0, currentMove +1), updatedSquares]
    sethistory(pastMove)
    setcurrentMove(pastMove.length -1)
    // setturn(!turn)
  }
  
  const jumpTo = (move)=>{
    setcurrentMove(move)
    // setturn(move%2 === 0)
  }
  const moves = history.map((sq, move) =>{
    let description;
    description = move > 0? `Move ${move}` : `Move ${move}`
    // history.length == 8? description = 'Math Draw': `Move ${move}`
    console.log(history.length)
    return(
      <>
      <button key={move} onClick={()=>jumpTo(move)} className='bg-[#999] mr-2 px-3 py-1 text-white rounded-2xl text-base hover:cursor-pointer hover:bg-[#888]'>{description}</button>
      </>
    )
  })
  return (
    <>
    <div className=''>
      <div><Board turn={turn} squares={currentSquare} onPlay={handlePlay} /></div>
    </div>
    <div className='timeTravel font-medium text-2xl text-[#999] w-70'>
      <p className='pt-4 text-center font-semibold'>Steps</p>
      {moves}
    </div>
    </>
  )
}

export default Game