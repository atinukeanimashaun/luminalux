import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Moisture from "../../assets/acwell/ph-moisture2.jpg";

const Hero = () => {

  return (
    < div className='pt-[25%] md:pt-[10%] pb-[5%] px-3 lg:px-[6rem] 2xl:px-[20rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary'> 
      <div className='flex flex-col md:flex-row justify-between items-center gap-7'>
        <div className='md:w-1/2 space-y-7 px-5'>
          <h1 className='text-brown1 text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-secondary font-thin lg:leading-snug '>
            Let nature take care of your body and soul
          </h1>
          <p className='lg:text-lg 2xl:text-3xl text-brown3'>Are you tired of battling stubborn breakouts and blemishes? Welcome to Puredermi, where effective acne skincare meets the promise of fresh, flawless skin.</p>
          <a href='/shop'
          className='bg-nude text-brown1 text-lg 2xl:text-3xl w-[50%] lg:w-[40%] xl:w-[25%] py-1 px-2 2xl:px-5 2xl:py-3 flex items-center hover:bg-brown1 hover:text-nude hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
            Shop now
            <BsArrowRight className='ml-2 w-6 h-6'/>
          </a>
        </div>
        <div className='md:w-1/2 px-4 py-10 w-full'>
          <img src={Moisture} alt="moisture" className='2xl:px-[10rem] ' />
        </div>
      </div>
    </div>
  )
}

export default Hero
