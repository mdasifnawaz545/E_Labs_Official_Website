import React from 'react'

function FooterCard({heading="Heading",array=[],icon1}) {
  return (
    <div className='flex flex-col gap-4 min-w-48'>
        <h1 className=' font-extrabold text-xl text-textColor1'>{heading}</h1>
        <div>
        {array.map((el)=>{
                return <pre><a target='_blank' href={el.url} className=' text-sm font-verna   text-textColor2 hover:text-textColor1 duration-200'>{icon1}{el.desc}</a></pre>
        })}
        </div>
    </div>
  )
}

export default FooterCard