import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Benefits from './components/Benefits';

const Main = () => {
  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <NavBar />
      <Hero />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Main
