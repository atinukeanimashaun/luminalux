import React from 'react'
import Moisture from "../../assets/acwell/ph-moisture2.jpg";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const OpeningHour = () => {
  return (
    < div className='pt-[25%] md:pt-[10%] lg:pt-[4%]  pb-[5%] px-[2rem] lg:px-[3rem] xl:px-[6rem] 2xl:px-[20rem] bg-nude1 font-primary'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-7 md:gap-4 lg:gap-7'>
        <div className='md:w-1/2 space-y-5 md:space-y-1 xl:space-y-4'>
          <p className="text-lg text-brown3">
            PURE BEAUTY WISDOM
          </p>
          <h1 className='text-brown1 text-4xl xl:text-6xl 2xl:text-8xl font-lobster lg:leading-snug md:pb-2 xl:pb-4'>
            Next-Gen Skincare for Lasting Glow
          </h1>

          <p className='lg:text-lg 2xl:text-3xl text-nude bg-brown4 xl:mt-4 p-5 md:p-3 xl:p-5'>
            Experience skincare of the future with our Next-Gen line, created for a long-lasting glow.
          </p>

          <p className='lg:text-lg 2xl:text-3xl text-brown3 md:py-3 xl:py-5'>
            Using cutting-edge components like hyaluronic acid and antioxidants, our products hydrate and revitalize skin to guarantee youthful, glowing skin.
          </p>

          <div className="flex justify-between items-center xl:mt-8 bg-brown4 text-nude lg:text-lg 2xl:text-3xl xl:mb-2 p-5 md:p-3 xl:p-5">
            <p>Opening Hours</p>

            <p>10:00 am - 09:00 pm</p>
          </div>

          <div className="pt-3 md:pt-2 lg:pt-4">
            <Link to='/'
              className='bg-nude text-brown1 text-lg 2xl:text-3xl w-[70%] lg:w-[50%] xl:w-[30%] py-1 px-2 2xl:px-5 2xl:py-5 flex items-center hover:bg-brown4 hover:text-nude hover:-translate-y-2 duration-300 transition-all cursor-pointer capitalize'>
              discover more
              <BsArrowRight className='ml-2 w-6 h-6' />
            </Link>
          </div>
        </div>

        <div className='md:w-1/2 lg:px-4 py-10 w-full'>
            <img src={Moisture} alt="moisture" className='object-cover 2xl:px-[10rem]' />
        </div>
      </div>
    </div>
  )
}

export default OpeningHour
