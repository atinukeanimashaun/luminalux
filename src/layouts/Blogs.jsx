import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Blog/Hero'
import About from '../components/Home/About'
import Blog from '../components/Blog/Blog'
import Subscribe from '../components/Home/Subscribe'
import Contact from '../components/Home/Contact'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'

function Blogs () {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <Hero />
          <Blog />
          <About />
          <Contact />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}
export default Blogs