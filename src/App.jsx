import React from 'react'
import Game from './components/Game'

const App = () => {
  return (
    <>
    <div className='h-screen w-full'>
      <h1 className='text-4xl text-center font-bold text-red-600 pt-5 pb-35'>
        {/* <img className='inline h-15 w-auto' src="./src/assets/ticTacToeLogo.png" alt="TicTacToe" /> */}
        Tic <span className='text-green-600'>Tac</span> Toe
      </h1>
    <div className='flex flex-col justify-center items-center'><Game /></div>
    </div>
    </>
  )
}

export default App
