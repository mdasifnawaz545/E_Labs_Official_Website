import React from 'react'
import FeedbackCard from '../subComponents/FeedbackCard';
import { useSelector } from 'react-redux';

function Feedback() {
  let feedbacks=useSelector(state=>state.feedback)
  return (
    <div className='flex flex-col items-center justify-around '>
        <h1  className='text-5xl font-black text-textColor1 p-4 mb-2 '>Feedback from our Students</h1>

      <div className=' min-h-screen flex-grow flex items-center flex-wrap gap-4 justify-center'>
        {
          feedbacks.map((feedback)=>(
            <FeedbackCard name={feedback.name} feedback={feedback.feedback}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feedback