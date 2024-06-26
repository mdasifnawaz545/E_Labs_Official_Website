import React from 'react'
import Navbar from './Navbar'
import IconButton from '../subComponents/IconButton'

function Home() {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-start mt-20 min-h-screen flex-grow px-6'>
        <div className='flex  scale-90 flex-col items-center justify-center p-8 gap-4'>
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
            Join us as we foster a community-driven approach to knowledge, making a tangible impact through shared learning experiences.
          </p>
          <IconButton buttonName='KNOW MORE' imageSource="../Images/arrows.png" />
        </div>
      </div>
    </div>
  )
}

export default Home