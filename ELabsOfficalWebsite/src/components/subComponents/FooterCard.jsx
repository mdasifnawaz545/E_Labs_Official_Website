import React from 'react'

function FooterCard({heading="Heading",array=[],icon1}) {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className=' font-extrabold text-xl text-textColor1'>{heading}</h1>
        <div>
        {array.map((el)=>{
                return <p className='text-sm text-textColor2'>{icon1}{el}</p>
        })}
        </div>
    </div>
  )
}

export default FooterCard