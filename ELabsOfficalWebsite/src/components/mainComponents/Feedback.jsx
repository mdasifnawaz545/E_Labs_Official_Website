import React from 'react'
import FeedbackCard from '../subComponents/FeedbackCard';

function Feedback() {
  let arr=[{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."}];
  return (
    <div className='flex flex-col items-center justify-around '>
        <h1  className='text-5xl font-black text-textColor1 p-4 mb-2 '>Feedback from our Students</h1>

      <div className=' min-h-screen flex-grow flex items-center flex-wrap gap-4 justify-center'>
        {
          arr.map((el)=>(
            <FeedbackCard name={el.name} feedback={el.feedback}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feedback