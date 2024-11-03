import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Blog from '../components/Home/Blog'
import Subscribe from '../components/Home/Subscribe'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'
import MyCarts from '../components/MyCarts'

const MyCart = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <MyCarts />
          <Blog />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}

export default MyCart
