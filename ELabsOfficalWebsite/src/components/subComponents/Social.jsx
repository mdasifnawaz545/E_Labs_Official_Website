import React from 'react'

function Social() {
    return (
        <div className='flex flex-col gap-4 min-w-48'>
            <h1 className=' font-extrabold text-xl text-textColor1'>Follow us on</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col text-textColor2 text-sm'>

                </div>
                <div className='h-1'></div>
                <div className='flex text-textColor2 text-sm gap-2 justify-start items-center m-0 p-0'>
                    <img src="../Images/linkedin (1).png" alt="" width={18} />
                    <p >Linkedin</p>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/instagram (2).png" alt="" width={18} />
                    <p className='text-textColor2 text-sm'>Instagram</p>
                </div>
                {/* <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/facebook (1).png" alt="" width={18} />
                    <p className='text-textColor2 text-sm'>Facebook</p>
                </div> */}
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/twitter-alt-circle.png" alt="" width={18} />
                    <p className='text-textColor2 text-sm'>TwitterX</p>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/discord.png" alt="" width={18} />
                    <p className='text-textColor2 text-sm'>Discord</p>
                </div>
                <div className='flex gap-2 justify-start items-center'>
                    <img src="../Images/medium.png" alt="" width={18} />
                    <p className='text-textColor2 text-sm'>Medium</p>
                </div>


            </div>
        </div>
    )
}

export default Social