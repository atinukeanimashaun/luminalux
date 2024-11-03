import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Anua from "../../assets/anua/anuatoner.webp";

const Benefits = () => {
 

  return (
      <div className='p-[5%] pt-[10%] lg:px-[6rem] 2xl:px-[20rem] bg-nude font-primary'>
        <div className='bg-nude1 flex flex-col md:flex-row'>
          <div className='md:w-1/2 p-8 md:py-0 lg:px-12'>
            <img src={Anua} alt="" className='md:w-[580px] 2xl:w-[1050px] md:h-[650px] 2xl:h-[800px] object-cover' />
          </div>
          <div className='md:w-1/2 bg-brown3 text-nude flex flex-col items-center justify-center px-8 lg:px-12 py-32 space-y-5'>
            <p className='uppercase 2xl:text-2xl'>explore</p>
            <h1 className='text-2xl 2xl:text-5xl md:text-4xl capitalize font-secondary font-thin'>
              fits your skin
            </h1>
            <p className='lg:w-[80%] md:text-xl 2xl:text-3xl '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ex blanditiis laborum iure neque aliquid cumque consequatur distinctio quos debitis.
            </p>
            <a href='/shop' 
            className='text-lg 2xl:text-3xl px-4 md:px-6 py-2 2xl:py-5 flex items-center border-2 border-nude hover:bg-nude hover:text-brown3 hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
              Shop now
              <BsArrowRight className='ml-2 w-6 h-6'/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Benefits
