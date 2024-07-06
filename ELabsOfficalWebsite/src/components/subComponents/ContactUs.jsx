import React from 'react'

function ContactUs() {
  let arr={desc:`Kalinga Institute of Industrial
Technology (KIIT).`};
  return (
    <div className='flex flex-col gap-4 min-w-48'>
        <h1 className=' font-extrabold text-xl text-textColor1'>Contact Us</h1>
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col text-textColor2 text-sm'>
              <div><pre>
            <a className='hover:text-textColor1 focus:text-textColor1' target='_blank' href='https://kiit.ac.in/'>{arr.desc}</a></pre>
            <div><p> </p></div></div></div>
            <div className='h-1'></div>
            <div className='flex text-textColor2 text-sm gap-2 justify-start items-center m-0 p-0'>
            <img src="../Images/circle-phone (3).png" alt="" width={18} />
            <a href="tel:0674 2725113" className='hover:text-textColor1 focus:text-textColor1'>0674 2725113</a>
            </div>
            <div className='flex gap-2 justify-start items-center'>
            <img src="../Images/circle-phone (3).png" alt="" width={18} />
            <a href="tel:0674 2725113" className='hover:text-textColor1 focus:text-textColor1 text-textColor2'>0674 2725113</a>
            </div>
            <div className='flex gap-2 justify-start items-center'>
            <img src="../Images/circle-envelope (1).png" alt="" width={18}  />
            <a href='mailto: elabskiit@kiit.ac.in' className='text-textColor2 text-sm'>elabskiit@kiit.ac.in</a>
            </div>
  
        </div>
    </div>
  )
}

export default ContactUs