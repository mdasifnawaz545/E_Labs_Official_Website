import React from 'react'

function IconButton({buttonName="Icon Button",imageSource,action,userClass=""}) {
    return (
        <a href="#aboutPage" className={`${userClass}`}><button className={`border-[1.5px] font-bold flex items-center justify-center gap-2 backdrop-blur-lg hover:shadow-sm hover:shadow-textColor1 hover:scale-105 }border-textColor1 duration-200 rounded-md p-1.5 px-2 text-textColor1`} >{buttonName} <img src={imageSource} alt="" width={18} /> </button></a>
      )
}

export default IconButton