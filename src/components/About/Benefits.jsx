import React from 'react'
import SkinCare from "../../assets/acwell/cleanser.jpg";

const Benefits = () => {
  return (
    <>
      <div className='px-[5%] py-[10%] lg:px-[6rem] bg-nude font-primary text-brown1'>
        <div className=''>
          <p className='capitalize pb-3 text-xl'>about us</p>
          <h1 className='font-secondary text-3xl lg:text-5xl pb-10'>Crafting skincare, creating memories</h1>
          <div className='flex flex-col md:flex-row md:items-center gap-7 mt-8'>
          <div className='md:w-1/2 flex justify-center items-center'>
            <img src={SkinCare}
            alt="" className='w-[500px] h-[600px]' />
          </div>
          <div className='md:w-1/2 space-y-6'>
            <p className='text-xl capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laborum. Explicabo alias quos dignissimos.</p>
            <p className='text-2xl lg:text-4xl font-secondary mb-12'>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, laborum. Explicabo alias quos dignissimos dicta nostrum necessitatibus quae doloremque laborum inventore atque.”</p>
            <p className='text-xl capitalize italic'>-ana john, founder</p>
          </div>
        </div>
        </div>
      </div>
      <div className='border-y-2 border-y-brown1 divide-y-2 md:divide-y-0 md:divide-x-2 divide-brown1 bg-nude font-primary text-brown1 py- lg:px-[6rem] flex flex-col md:flex-row'>
        <div className='py-8 px-10 space-y-2'>
          <h1 className='text-2xl font-secondary'>Our mission</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laudantium eligendi ducimus ipsum neque corporis sunt optio placeat dolor amet, cupiditate necessitatibus porro perspiciatis ratione dignissimos aliquam corrupti. Voluptate, sit?</p>
        </div>
        <div className='py-8 px-10 space-y-2'>
          <h1 className='text-2xl font-secondary'>Our vision</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero commodi quia optio alias quo voluptate, assumenda eligendi aspernatur, accusamus vero tempore reiciendis reprehenderit unde neque est perferendis doloribus magni!</p>
        </div>
      </div>
    </>
  )
}

export default Benefits
