import React from 'react'
import Card from '../subComponents/Card'
import HPCard from '../subComponents/HPCard'

function About() {
  let desc=`fficia doloremque voluptates veritatis, beatae non deleniti pariatur nulla perspiciatis laborum reiciendis odio quam totam fugiat quae? Facilis magni aut rerum! Iure earum recusandae corporis sed.
      Earum vitae libero omnis expedita dolorum cupiditate repellendus deserunt ad adipisci aspernatur non harum delectus ducimus corporis, suscipit ratione. Animi rerum blanditiis reiciendis impedit sed modi quisquam, tempore explicabo numquam?
      Aut tempore eaque adipisci, autem veritatis modi alias praesentium. Nulla error dolorum possimus! Excepturi dolorem eaque totam nihil iusto officia dolor nisi pariatur laborum, iure laboriosam voluptate in, tempore deleniti?
      tempora facilis saepe officiis dicta officia praesentium unde rem ullam sequi eius vitae totam quas eveniet. Eos!`
  return (
    
        
      <div className='flex flex-wrap items-center justify-evenly pt-4 min-h-screen gap-8 dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_20%,#ffd4b3_60%)]'>
          <Card />
          <HPCard heading='E - Labs'  userClass='text-6xl font-black' description={desc}/>
        </div>
    
      
    
  )
}

export default About