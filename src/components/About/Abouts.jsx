import React from 'react'

const Abouts = () => {
  return (
    <div className='py-[5%] lg:px-[6rem] bg-brown3 text-nude font-primary'>
      <div className='flex flex-col md:flex-row gap-5 divide-y-2 md:divide-y-0 md:divide-x-2 divide-nude'>
        <div className='space-y-2 text-center px-8 pt-5'>
          <h1 className='text-3xl md:text-5xl font-secondary'>01</h1>
          <h3 className='text-2xl'>100% Organic</h3>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum libero illo facilis excepturi dolor vel eius cupiditate nulla eum placeat maxime.</p>
        </div>
        <div className='space-y-2 text-center px-8 pt-5'>
          <h1 className='text-3xl md:text-5xl font-secondary'>02</h1>
          <h3 className='text-2xl'>Fits your skin</h3>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum libero illo facilis excepturi dolor vel eius cupiditate nulla eum placeat maxime.</p>
        </div>
        <div className='space-y-2 text-center px-8 pt-5'>
          <h1 className='text-3xl md:text-5xl font-secondary'>03</h1>
          <h3 className='text-2xl'>Easy to use</h3>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum libero illo facilis excepturi dolor vel eius cupiditate nulla eum placeat maxime.</p>
        </div>
      </div>
    </div>
  )
}

export default Abouts
