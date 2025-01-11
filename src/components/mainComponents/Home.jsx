// import React from 'react'
// import Navbar from './Navbar'
import About from './About'
import FirstPage from './FirstPage'
import Events from './Events'
import Member from './Member'
import Feedback from './Feedback'
import Gallery from './Gallery'
// import Members from './Members'

function Home() {

  return (
    <div className='body dark:bg-[#ffd4b3] dark:backdrop-blur-lg'>
      <section id='home' className='min-h-screen flex flex-col justify-center items-center'>
        <FirstPage />
      </section>
      <section id='aboutPage'>
        <About/>
      </section>
      <section id='eventPage'>
        <Events/>
      </section>
      <section id='membersPage'>
        <Member/>
      </section>
      <section id='galleryPage'>
        <Gallery/>
      </section>
      <section id='feedbackPage'>
        <Feedback/>
      </section>
      <br />
    </div>
  )
}

export default Home