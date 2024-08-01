import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../subComponents/Button'
import ImageButton from '../subComponents/ImageButton'
import { useSelector } from 'react-redux';
import '../../styles/OnlyNav.css'

function Navbar() {
  let [darkTheme, setDarkTheme] = useState(true);
  let { theme } = useSelector(state => state.theme);
  let [ham,setHam]=useState(false);
  let bg = "";
  let hamberger = 'https://res.cloudinary.com/dpqdgcipi/image/upload/v1720320235/menu_s65s86.png'


  const handleHamberger = async () => {
    const navb=document.querySelector('.hamburger')
    console.log("Hamburger was clicked.")
    console.log(navb)
    setHam((prev)=>(prev=!prev));
    console.log(ham);
    // if(ham){
    //   navb.style.visibility='hidden';
    // }
    // else{
    //   navb.style.visibility='visible';

    // }

    // Same work has been done using ternary operator in class attribute iteself.

  }



  let themeImage = (document.querySelector('html').classList.contains('dark')) ? "https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Day_v8jqbm.png" : "https://res.cloudinary.com/dpqdgcipi/image/upload/v1719394975/Night_kwwujc.png"

  function changeTheme() {
    document.querySelector('html').classList.toggle('dark')
  }

  return (
    <div className='p-2 w-full z-10 dark:bg-blue-100 dark:backdrop-blur-xl'>
      <div className='w-full p-2 h-16 flex items-center justify-evenly  rounded-md'>
        <nav className={`w-full list-none flex items-center  justify-between`}>
          <div className='flex items-center  justify-between border-1 border-textColor1 py-1 px-[1px] rounded-lg'>
            <li className=''>
              <figure className='flex items-center justify-center'>
                <a href="/">
                  <img
                    src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png"
                    width={54}
                    alt="LOGO"
                  />
                </a>

                {/* <figcaption className='font-bold text-xl text-textColor1'>E Labs</figcaption> */}
              </figure>
            </li>
          </div>

          <div className={`sm:visible md:visible lg:visible ${ham?"":"max-[900px]:hidden"} xl:visible 2xl:visible text-textColor2 flex max-[900px]:flex-col  duration-200 max-[900px]:mt-[42rem] text-center max-[900px]:text-3xl max-[900px] ${bg} gap-16 transition-all  hamburger justify-center items-center max-[900px]:justify-center max-[900px]:items-center`}>
            <li


            >
              <NavLink to="/" className={({ isActive }) => (`${(isActive ? "text-textColor1" : "")}`)}>

                Home
              </NavLink>
            </li>

            <li


            >
              <NavLink to="/about" className={({ isActive }) => (`${(isActive ? "text-textColor1" : "")}`)}>

                About
              </NavLink>
            </li>

            <li


            >
              <NavLink to="/events" className={({ isActive }) => (`${(isActive ? "text-textColor1" : "")}`)}>

                Events
              </NavLink>
            </li>

            <li


            >
              <NavLink to="/members" className={({ isActive }) => (`${(isActive ? "text-textColor1" : "")}`)}>

                Members
              </NavLink>
            </li>
            <li


            >
              <NavLink to="/feedback" className={({ isActive }) => (`${(isActive ? "text-textColor1" : "")}`)}>

                Feedback
              </NavLink>
            </li>

          </div>

          <div className='flex gap-2 pr-1'>

            <li>
              <ImageButton imageSource={themeImage} func={changeTheme} />
            </li>

            <div className='flex gap-2 max-[467px]:hidden'>
              <li>
                <Link to={'/signup'}>
                  <Button buttonName='SIGN UP' userClass='' />
                </Link>
                {/* <Button buttonName="SIGN UP" userClass="" href='/signup'/> */}
              </li>
              <li>
                <Link to={'/login'}>
                  <Button buttonName='LOG IN' />
                </Link>
                {/* <Button buttonName='LOG IN' userClass='' href='/login'/> */}
              </li>

            </div>
            <li>
              <ImageButton userClass={"min-[850px]:hidden"} imageSource={hamberger} func={handleHamberger}/>
            </li>
          </div>

        </nav>

      </div>
    </div>
  )
}

export default Navbar