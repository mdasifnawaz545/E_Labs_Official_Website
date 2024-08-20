import React from 'react'
import IconButton from '../subComponents/IconButton'
import EventCard from '../subComponents/EventCard'
import Member from './Member'
import Signup from '../mainComponents/Signup'
import Login from '../mainComponents/Login'
import EventPage from '../mainComponents/EventPage'

function FirstPage() {
  return (
    <div className='flex flex-col items-center justify-center flex-grow '>
    <div className='flex scale-95 flex-col items-center justify-center  gap-6'>
      <figure>
        <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png" width={256} alt="" />
      </figure>
      <div className="heading flex items-center justify-center flex-col gap-2">
        <h1 className='text-textColor1 text-center font-black text-5xl '>Empowering through Collaboration:</h1>
        <h2 className='text-textColor1 text-center font-black text-3xl' >
          Peer-to-Peer Learning at <span className='text-5xl text-center font-black break-inside-avoid whitespace-nowrap'>E Labs</span>
        </h2>
      </div>
      <p className='text-textColor2 max-w-96 text-center'>
        Join us as we foster a community-driven approach to knowledge.
      </p>
      <IconButton userClass='animate-bounce' buttonName='KNOW MORE' imageSource="../Images/next.png" />
      {/* Testing Components */}
        
    </div>
  </div>
  )
}

export default FirstPage