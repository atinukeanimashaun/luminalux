import React from 'react'

const About = () => {
  return (
    <div className='p-[5%] lg:px-[8rem] bg-nude text-brown1'>
      <div className='flex flex-col md:flex-row gap-7'>
        <div className='md:w-1/2'>
          <p className='text-xl 2xl:text-2xl font-primary pb-3'>About us</p>
          <h1 className='text-4xl md:text-6xl font-secondary w-4/5'>Luminalux facial and skincare company</h1>
        </div>
        <div className='md:w-1/2 pt-6'>
          <p className='text-xl xl:text-2xl leading-snug'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, tenetur? Est placeat incidunt obcaecati. Explicabo nobis labore adipisci! Aspernatur, esse provident. Facere quia deserunt odit architecto eos quas aperiam et.
          </p>
          <p className='text-xl xl:text-2xl leading-snug pt-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sapiente quo, alias earum at id odit dolor? Tempore, et ullam officiis labore expedita sequi, non animi unde dolores ducimus quod?
          </p>
        </div>
      </div>
      <div className='border-b-2 border-b-brown1 pt-16'></div>
    </div>
  )
}

export default About
