import React from 'react'
import MemberCard from '../subComponents/MemberCard'

function Member() {



  return (
    <div className='flex flex-col items-center justify-center text-center my-12'>
      <h1 className='text-5xl font-black mb-8 text-textColor1 '>Meet Our Team</h1>
      <MemberCard name={"Md Asif Nawaz"} position={'Asst.Lead Web Domain'} />
    </div>
  )
}

export default Member