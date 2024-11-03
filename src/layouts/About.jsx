import React, { useContext } from 'react'
import Footer from "../components/Footer"
import Blog from "../components/Home/Blog"
import Subscribe from "../components/Home/Subscribe"
import NavBar from "../components/NavBar"
import Hero from "../components/About/Hero"
import Benefits from "../components/About/Benefits"
import Feature from "../components/About/Feature"
import Abouts from "../components/About/Abouts"
import OurTeam from "../components/About/OurTeam"
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'



function About () {
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
          <Abouts />
          <OurTeam />
          <Blog />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}
export default About