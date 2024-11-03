import React, { useContext } from 'react'
import NavBar from '../components/NavBar';
import Blog from '../components/Home/Blog';
import Subscribe from '../components/Home/Subscribe';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollToTop from '../components/ScrollToTop';
import { AuthContext } from '../contexts/AuthProvider';
import Return from '../components/Return';

const ReturnPolicy = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
    <ScrollToTop />
    { loading ? <LoadingSpinner/> :
      <div>
        <NavBar />
        <Return />
        <Blog />
        <Subscribe />
        <Footer />
      </div>
    }
  </div>
  )
}

export default ReturnPolicy;