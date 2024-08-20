import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MemberCard from '../subComponents/MemberCard'
import { useSelector } from 'react-redux';
function Member() {

  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let memberDetails = useSelector(state => state.memberDetails)
  return (
    <div className='w-full flex flex-col flex-wrap items-center justify-center text-center mt-12'>

      <h1 className='text-5xl font-black mb-8 text-textColor1 '>MEET WITH OUR TEAM</h1>
      <Slider {...settings} className='flex flex-wrap justify-evenly items-center text-center w-[85%] px-0' >
        
        {
          memberDetails.map((el) => (
            <div className='w-full flex items-center justify-center'>
              <MemberCard name={el.name} imgSource={el.imgSrc} position={el.position} />
            </div>
          ))
        }
       
      </Slider>
    </div>
  )
}

export default Member