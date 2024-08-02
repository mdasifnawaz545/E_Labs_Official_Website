import React from 'react'

function Card({userClass=``}) {
  return (
    <div className={`w-80 flex justify-center items-center h-[28rem] border border-textColor1 rounded-md backdrop-blur-lg ${userClass}`}>
        <figure>
            <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1719200986/Trasnparent12_1_d7siyr.png" alt="" />
        </figure>
    </div>
  )
}

export default Card