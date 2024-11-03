import React, { useContext } from 'react'
import Benefits from '../components/Home/Benefits'
import Hero from '../components/Home/Hero'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Feature from '../components/Home/Feature'
import About from '../components/Home/About'
import OurServices from '../components/Home/OurServices'
import NewArrivals from '../components/Home/NewArrivals'
import Contact from '../components/Home/Contact'
import Blog from '../components/Home/Blog'
import Testimonials from '../components/Home/Testimonials'
import Subscribe from '../components/Home/Subscribe'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'

function Home () {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <Hero />
          <Benefits />
          <Feature />
          <About />
          <OurServices />
          <NewArrivals />
          <Blog />
          <Testimonials />
          <Contact />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}

export default Home
