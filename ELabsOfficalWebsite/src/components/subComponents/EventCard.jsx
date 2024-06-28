import React from 'react'
import Button from './Button'

function EventCard({imgSource}) {
  return (
    <div className='w-[24rem] border border-textColor1 rounded-md h-[24rem] p-4 flex flex-col  gap-8'>
        {/* <div>
            <h2 className='text-5xl font-extrabold text-textColor1'>E LABS</h2>
            <h3 className='text-2xl font-bold text-textColor1'> Presents</h3>
        </div> */}
        <div className='overflow-hidden w-88  border-textColor2 h-72 rounded-md border'>
            <figure>
                <img src="../Images/Screenshot 2024-06-28 182059.png" alt="" />
            </figure>

        </div>
        <div className='flex items-center justify-evenly'>
            <Button buttonName='Register Now !' ></Button>
            <Button buttonName='More Details'></Button>
        </div>
        
    </div>
  )
}

export default EventCard