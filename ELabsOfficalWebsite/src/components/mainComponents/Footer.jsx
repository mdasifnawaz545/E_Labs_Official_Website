import React from 'react'
import FooterCard from '../subComponents/FooterCard'
import ContactUs from '../subComponents/ContactUs'
import Social from '../subComponents/Social'

function Footer() {
  return (
    <div className='backdrop-blur-lg dark:backdrop-blur-lg dark:bg-blue-100 rounded-t-md bottom-0 w-full min-h-64 gap-8 flex flex-wrap items-center justify-evenly border-x border-t border-textColor1'>
      <figure>
        <img
          src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png" alt=""
          width={256}
          className='scale-75'
        />
      </figure>
      <div className='flex flex-wrap items-center justify-evenly gap-4'>
        <Social />
        <ContactUs />
        <FooterCard heading={`Address`} array={[{desc:`KIIT UNIVERSITY, Campus 12 
Old Electronics Building,
Patia, Bhubaneswar,
Odisha India 751024`, url:``}]} />
        <FooterCard heading={`Contact Us`} array={[`Kalinga Institute of Industrial`, ` Technology (KIIT), `, ``, `India 751024`, ``, ``, ``, ``]} />

      </div>
    </div>
  )
}

export default Footer