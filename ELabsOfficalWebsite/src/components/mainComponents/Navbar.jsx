import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-2 w-full fixed'>
      <div className='w-full mt-1 p-2 h-16 flex items-center justify-evenly border-2 rounded-md border-textColor1'>
        <nav className='w-full list-none flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <li>
              <figure className='flex items-center justify-center'>
                <img
                  src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
                  width={48}
                  alt="LOGO"
                />
                {/* <figcaption className='font-bold text-xl text-textColor1'>E Labs</figcaption> */}
              </figure>
            </li>
          </div>

          <div className=' md:visible sm:visible lg:visible text-textColor2 flex  gap-16'>
            <li


            >
              <NavLink to="/" className={({isActive})=>(`${(isActive?"text-textColor1":"")}`)}>

                Home
              </NavLink>
            </li>

            <li


            >
              <NavLink to="/about" className={({isActive})=>(`${(isActive?"text-textColor1":"")}`)}>

                About
              </NavLink>
            </li>

            <li


            >
              <NavLink to="/events" className={({isActive})=>(`${(isActive?"text-textColor1":"")}`)}>

                Events
              </NavLink>
            </li>

            <li


            > 
              <NavLink to="/members" className={({isActive})=>(`${(isActive?"text-textColor1":"")}`)}>

                Members
              </NavLink>
            </li>
            <li


            >
              <NavLink to="/feedback" className={({isActive})=>(`${(isActive?"text-textColor1":"")}`)}>

                Feedback
              </NavLink>
            </li>

          </div>

          <div className='flex gap-2 pr-1'>
            <li>
              <button className='border-2 border-textColor1 rounded-md p-1 px-2 text-textColor1' >SIGN UP</button>
            </li>
            <li>
              <button className='border-2 border-textColor1 rounded-md p-1 px-2 text-textColor1' >LOG IN</button>
            </li>

          </div>

        </nav>

      </div>
    </div>
  )
}

export default Navbar