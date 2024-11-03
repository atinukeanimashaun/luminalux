import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div className='p-[3%] lg:px-[6rem] 2xl:px-[10rem] bg-brown3 text-nude flex flex-col md:flex-row justify-between items-center gap-4'>
      <h1 className='text-4xl lg:text-6xl font-secondary font-thin md:w-[65%]'>Subscribe to get 10% off your first order</h1>
      <div className='md:w-1/2 2xl:px-[10rem] flex items-center my-7'>
        <input 
        type="email" 
        name='email' id='login-email' 
        placeholder='Drop your email here' 
        autoComplete="on"
        className='input p-3 2xl:p-6 text-xl 2xl:text-2xl border-2 border-brown outline-none w-full font-primary'/>
        <button type='submit' value="send" className='p-3 2xl:p-6 text-brown3 text-xl 2xl:text-2xl bg-white border-2 border-brown cursor-pointer'>
        <BsArrowRight className='my-1'/>
        </button>
      </div>
    </div>
  )
}

export default Subscribe
