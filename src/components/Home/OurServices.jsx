import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { companies } from '../../constants'

const OurServices = () => {
  return (
    <>
    <div className='p-[5%] lg:px-[6rem] bg-nude text-brown flex flex-row justify-center md:items-center flex-wrap gap-8'>  
      {companies.map((company, index) => (
          <p key={index} className='text-xl md:text-2xl 2xl:text-4xl font-secondary font-thin uppercase'>{company.name}</p>
      ))}
    </div>
    <div>
      <a href="/about"
      className='bg-brown3 py-10 px-[5%] 2xl:px-[8%] text-nude flex flex-col md:flex-row justify-between text-3xl 2xl:text-4xl font-secondary cursor-pointer hover:text-nude1'
      >
        <p className=''>Lorem ipsum, dolor sit amet consectetur elit.</p> 
        <BsArrowRight className='mt-1.5 ml-2 '/>
      </a>
    </div>
    </>
  )
}

export default OurServices
