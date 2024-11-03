import React from 'react'
import Auna from '../../assets/anua/AnuaCleansing_Oil.webp'

const Hero = () => {
  return (
    <div className='pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary text-brown1'
    >
      <div className='flex flex-col items-center gap-2'>
        <p className='text-base capitalize mb-4'>
          june 22, 2024 
        </p>
        <h1 className='text-3xl font-thin font-secondary'>
          Essential Oils for Skincare
        </h1>
        <div>
          <img src={Auna} alt="auna" width={500} />
        </div>
      </div>
    </div>
  )
}

export default Hero
