import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector} from 'react-redux'

function App() {

  const memberDetails=useSelector(state=>state.memberDetails)
  console.log(memberDetails);
  return (
    
      <div className='w-full min-h-screen bg-bgColor text-textColor1 flex flex-col justify-center items-center'>
        <h1>E Labs</h1>
        <p>Member 1 : {memberDetails[0].name}</p>
      </div>
    
  )
}

export default App
