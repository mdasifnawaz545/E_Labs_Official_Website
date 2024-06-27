import React from 'react'

function ContactUs() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className=' font-extrabold text-xl text-textColor1'>Contact Us</h1>
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col text-textColor2 text-sm'>
            <div><p>Kalinga Institute of Industrial</p></div>
            <div><p> Technology (KIIT)</p></div></div>
            <div className='h-1'></div>
            <div className='flex text-textColor2 text-sm gap-2 justify-start items-center m-0 p-0'>
            <img src="../Images/circle-phone (2).png" alt="" width={18} />
            <p >0674 2725113</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
            <img src="../Images/circle-phone (2).png" alt="" width={18} />
            <p className='text-textColor2 text-sm'>0674 2741389</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
            <img src="../Images/circle-envelope.png" alt="" width={18}  />
            <a href='mailto: elabskiit@kiit.ac.in' className='text-textColor2 text-sm'>elabskiit@kiit.ac.in</a>
            </div>
  
        </div>
    </div>
  )
}

export default ContactUs