import React from 'react'
import FooterCard from '../subComponents/FooterCard'
import ContactUs from '../subComponents/ContactUs'
import Social from '../subComponents/Social'

function Footer() {
  return (
    <div className='backdrop-blur-lg dark:backdrop-blur-lg dark:bg-[#ffd4b3]  rounded-t-md bottom-0 w-full min-h-64 gap-1 max-[467px]:gap-4 flex flex-col flex-wrap items-center justify-evenly border-x border-t border-textColor1'>
      <div className='flex flex-wrap w-full items-center justify-evenly'>
        <figure>
          <img
            src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png" alt=""
            width={256}
            className='scale-75'
          />
        </figure>
        <div className='flex flex-wrap items-start justify-evenly gap-4'>
          <Social />
          <ContactUs />
          <FooterCard heading={`Address`} array={[{
            desc: `KIIT UNIVERSITY, Campus 12 
Old Electronics Building,
Patia, Bhubaneswar,
Odisha India 751024`, url: `https://www.google.com/maps/place/Kalinga+Institute+of+Industrial+Technology/@20.3555464,85.8161009,17z/data=!4m15!1m8!3m7!1s0x3a19091813dab8d5:0xa033051ccddbbcbc!2sKalinga+Institute+of+Industrial+Technology!8m2!3d20.3547697!4d85.8152921!10e5!16zL20vMGdmaDVt!3m5!1s0x3a19091813dab8d5:0xa033051ccddbbcbc!8m2!3d20.3547697!4d85.8152921!16zL20vMGdmaDVt?entry=ttu`
          }]} />
        </div>


      </div>
      <div className=' select-none flex gap-1 flex-col font-extralight items-center justify-center text-textColor2 dark:text-black  tracking-widest text-xs mb-2'><p>&copy;2024. All Rights are Reserved by ELABS</p>
        <p>Made By Web Development Team</p>

      </div>

    </div>

  )
}

export default Footer