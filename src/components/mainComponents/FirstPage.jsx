import React, { useRef } from 'react'
import IconButton from '../subComponents/IconButton'
import EventCard from '../subComponents/EventCard'
import Member from './Member'
import Signup from '../mainComponents/Signup'
import Login from '../mainComponents/Login'
import EventPage from '../mainComponents/EventPage'
import { motion } from 'framer-motion'

function FirstPage() {
  const widgetRef = useRef();

  return (
    <div className='flex flex-col items-center justify-center flex-grow xl:scale-125'>
      <div className='flex scale-95 flex-col items-center justify-center  gap-6'>
        <figure>
          <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png" width={256} alt="" />
        </figure>
        <div className="heading flex items-center justify-center flex-col gap-2">
          <motion.h1  animate={{rotateZ:360}} className='text-textColor1 text-center font-black text-5xl '>Empowering through Collaboration:</motion.h1>
          <motion.h2 animate={{scale:1.2}} className='text-textColor1 text-center font-black text-3xl' >
            Peer-to-Peer Learning at <span className='text-5xl text-center font-black break-inside-avoid whitespace-nowrap'>E Labs</span>
          </motion.h2>
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