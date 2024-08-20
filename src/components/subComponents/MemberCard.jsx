import React from 'react'

function MemberCard({ imgSource = "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg", name = "Name", position = "Web Developer" }) {
  return (
    <div className='flex flex-wrap-reverse justify-between items-center'>
      <div className='bg-textColor1 w-full'>

      </div>
      <div className={`w-80 flex flex-col justify-center gap-3 items-center h-[28rem] border border-textColor1 rounded-md backdrop-blur-lg pt-2 `}>
        <div>
          <figure className=' border-textColor2 border-[1.5px] rounded-md overflow-hidden'>
            <img src={imgSource} alt="" width={225} height={200} />
          </figure>
        </div>
        <div className='flex flex-col justify-center items-center' >
          <p className='text-3xl font-bold text-textColor1'>{name.toUpperCase()}</p>
          <p className='text-textColor2  font-thin'>{position.toUpperCase()}</p>
        </div>
      </div>
    </div>

  )
}

export default MemberCard