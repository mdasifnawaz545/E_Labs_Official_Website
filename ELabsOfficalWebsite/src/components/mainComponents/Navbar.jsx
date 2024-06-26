import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../subComponents/Button'
import ImageButton from '../subComponents/ImageButton'
import { useSelector } from 'react-redux';

function Navbar() {
  let [darkTheme,setDarkTheme]=useState(true);
  let {theme}=useSelector(state=>state.theme);

  let themeImage=(document.querySelector('html').classList.contains('dark'))?"https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Day_v8jqbm.png":"https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Night_kwwujc.png"

  function changeTheme(){
      document.querySelector('html').classList.toggle('dark')
  }

  return (
    <div className='p-2 w-full fixed z-10 dark:bg-blue-100 dark:backdrop-blur-xl'>
      <div className='w-full p-2 h-16 flex items-center justify-evenly  rounded-md'>
        <nav className='w-full list-none flex items-center justify-between'>
          <div className='flex items-center justify-between border-1 border-textColor1 py-1 px-[1px] rounded-lg'>
            <li className=''>
              <figure className='flex items-center justify-center'>
                <img
                  src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
                  width={54}
                  alt="LOGO"
                />
                {/* <figcaption className='font-bold text-xl text-textColor1'>E Labs</figcaption> */}
              </figure>
            </li>
          </div>

          <div className='hidden sm:visible md:visible lg:visible xl:visible 2xl:visible text-textColor2 flex  gap-16'>
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
              <ImageButton imageSource={themeImage} func={changeTheme}/>
            </li>
            <div className='flex gap-2'>
            <li>
              <Button buttonName='SIGN UP' userClass=''/>
            </li>
            <li>
              <Button buttonName='LOG IN'/>
            </li>
            </div>
          </div>

        </nav>

      </div>
    </div>
  )
}

export default Navbar