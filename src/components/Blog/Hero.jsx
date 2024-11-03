import React from 'react'

const Hero = () => {
  return (
    <div className='pt-[25%] sm:pt-[13%] md:pt-[10%] pb-[5%] px-5 lg:px-[6rem] text-brown1 bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary'>
      <div className='flex flex-col items-center text-center space-y-3'>
        <p>Welcome to</p>
        <h1 className='text-2xl md:text-6xl capitalize font-secondary'>the luminalux blog</h1>
        <p className='md:text-2xl w-[85%] lg:w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptates sit iusto sunt corporis adipisci quo non eveniet dolor vitae possimus optio esse ab nostrum.</p>
      </div>
    </div>
  )
}

export default Hero
