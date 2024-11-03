import React, { useContext } from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ScrollToTop from '../components/ScrollToTop'
import Subscribe from "../components/Home/Subscribe"
import { AuthContext } from '../contexts/AuthProvider'
import ProductDetail from '../components/ProductDetail'
import LoadingSpinner from '../components/LoadingSpinner'

const ProductDetails = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
      <ScrollToTop />
      { loading ? <LoadingSpinner/> :
        <div>
          <NavBar />
          <ProductDetail />
          <Subscribe />
          <Footer />
        </div>
      }
    </div>
  )
}

export default ProductDetails
