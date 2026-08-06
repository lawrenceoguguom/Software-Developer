import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (

    <div className='home' id='home'>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />

    </div>

  )
}

export default Home
