import React from 'react'

function Social() {
    return (
        <div className='flex flex-col gap-4 min-w-48'>
            <h1 className=' font-extrabold text-xl text-textColor1'>Follow us on</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col text-textColor2 text-sm gap-2'>

                
                <div className='h-1'></div>
                <div className='flex text-textColor2 text-sm gap-2 justify-start items-center m-0 p-0'>
                    <img src="../Images/linkedin (1).png" alt="" width={18} />
                    <a target='_blank' href="https://www.linkedin.com/company/kiit-elabs/mycompany/" className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1 '>LinkedIn</a>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/instagram (2).png" alt="" width={18} />
                    <a  target='_blank' href="https://www.instagram.com/elabs.kiit/" className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1'>Instagram</a>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/github.png" alt="" width={18} />
                    <a target='_blank'  href='https://github.com/Kiit-Elabs' className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1'>Github</a>
                </div>
                {/* <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/twitter-alt-circle.png" alt="" width={18} />
                    <a  target='_blank'  href="https://x.com/elabs?lang=en" className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1'>TwitterX</a>
                </div> */}
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/discord.png" alt="" width={18} />
                    <a target='_blank'  href="https://discord.com/" className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1'>Discord</a>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/medium.png" alt="" width={18} />
                    <a target='_blank'  href="https://medium.com/parsons-elab/about" className='hover:text-textColor1 text-textColor2 duration-200 focus:text-textColor1'>Medium</a>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Social