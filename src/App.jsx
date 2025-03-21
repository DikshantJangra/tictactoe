import React, { useState } from 'react'
import Game from './components/Game'
import { IoMoon } from "react-icons/io5";
import { RiSunFill } from "react-icons/ri";
import { MdSwipeUp } from 'react-icons/md';

const App = () => {
  const [switchMode, setswitchMode] = useState(false)
  const swtch = ()=>{
    setswitchMode(!switchMode)
  }
  const mode = {
    theme: switchMode? 'bg-white':'bg-black',
    color: switchMode? 'text-black':'text-white',
    darkOrLight: switchMode? <IoMoon/>:<RiSunFill/> 
  }
  
  return (
    <>
    <div className={`h-screen w-full ${mode.theme} duration-300`}>
      <div className='grid grid-cols-3 grid-rows-1 items-center pt-5 pb-35'>
      <h1 className='text-4xl text-center font-bold text-red-600 xs:pl-125 col-span-2'>
        {/* <img className='inline h-15 w-auto' src="./src/assets/ticTacToeLogo.png" alt="TicTacToe" /> */}
        Tic <span className='text-green-600'>Tac</span> Toe
      </h1>
      <button className='justify-self-end mr-10 p-3 rounded-[50px] text-white bg-[#3f4458] text-1xl hover:cursor-pointer duration-300' onClick={swtch}>{mode.darkOrLight}</button>
      </div>
    <div className='flex flex-col justify-center items-center'><Game colour={mode.color} /></div>
    </div>
    </>
  )
}

export default App
