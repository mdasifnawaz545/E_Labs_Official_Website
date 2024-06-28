import React from 'react'
import Navbar from './Navbar'
import About from './About'
import FirstPage from './FirstPage'
import Events from './Events'

function Home() {

  return (
    <div className='body dark:bg-blue-100 dark:backdrop-blur-lg'>
      <section id='home'>
        <FirstPage />
      </section>
      <section id='aboutPage'>
        <About/>
      </section>
      <section id='eventPage'>
        <Events/>
      </section>
    </div>
  )
}

export default Home