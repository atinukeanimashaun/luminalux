import React, { useContext } from 'react'
import NavBar from '../components/NavBar';
import Blog from '../components/Home/Blog';
import Subscribe from '../components/Home/Subscribe';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ScrollToTop from '../components/ScrollToTop';
import { AuthContext } from '../contexts/AuthProvider';
import Hero from '../components/BookConsultations/Hero';
import OpeningHour from '../components/BookConsultations/OpeningHour';
import Appointment from '../components/BookConsultations/Appointment';

const BookConsultation = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className=' pt-[2rem] lg:pt-[5.25rem] overflow-hidden'>
    <ScrollToTop />
    { loading ? <LoadingSpinner/> :
      <div>
        <NavBar />
        <Hero />
        <OpeningHour />
        <Appointment />
        <Blog />
        <Subscribe />
        <Footer />
      </div>
    }
  </div>
  )
}

export default BookConsultation;


