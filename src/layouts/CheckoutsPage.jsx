import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Checkout from '../components/Checkout/Checkout'
import Subscribe from '../components/Home/Subscribe'
import { AuthContext } from '../contexts/AuthProvider'
import LoadingSpinner from '../components/LoadingSpinner'
import ScrollToTop from '../components/ScrollToTop'

const CheckoutsPage = () => {
  const {loading} = useContext(AuthContext);
  
  return (
    <div className="pt-[2rem] lg:pt-[5.25rem] overflow-hidden">
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <Checkout />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}

export default CheckoutsPage
