import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SkinCare from "../../assets/skin-care.jpeg";

const Contact = () => {

  return (
    <div className='p-[5%] lg:px-[6rem] 2xl:px-[20rem] bg-nude text-brown1 font-primary'>
      <div className='flex flex-col md:flex-row-reverse md:items-center gap-7'>
        <div className='md:w-1/2 flex justify-center items-center'>
          <img src={SkinCare}
          alt="" className='w-[400px] 2xl:w-[650px] h-[500px] 2xl:h-[700px]' />
        </div>
        <div className='md:w-1/2 space-y-6 pb-10'>
          <p className='text-xl md:text-2xl capitalize'>try our service</p>
          <h1 className='text-4xl lg:text-6xl 2xl:text-7xl font-secondary'>Your skin diagnosis in 3 minutes</h1>
          <p className='text-xl lg:text-2xl 2xl:text-3xl hidden md:block mb-12'>Say hello to a more radiant, healthier you with personalized skincare that's as unique as you are.</p>
          <a href='/contact'
          className='text-sm md:text-lg 2xl:text-2xl  font-primary w-[65%] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] px-3 md:px-6 py-2 flex items-center border-2 border-brown1 hover:bg-brown1 hover:text-nude hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
            Start my diagnosis
            <BsArrowRight className='ml-2 w-6 h-6'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
