import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscribe from '../components/Home/Subscribe'
import Blog from '../components/Home/Blog'
import Abouts from '../components/About/Abouts'
import Hero from '../components/Shop/Hero'
import Products from '../components/Shop/Products'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'



function Shop () {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <Hero />
          <Products />
          <Abouts />
          <Blog />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}
export default Shop