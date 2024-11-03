import React from 'react'
import { BsArrowRight, BsBagDash, BsPerson, BsEnvelopeArrowDown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate('/shop')
  };
  const handleAbout = () => {
    navigate('/about')
  };

  return (
    <div>
     <div className='px-4 space-y-5 mb-10'>
      <div className='flex flex-col md:flex-row gap-7'>
        <div className='border-2 border-brown1 p-4 w-20 h-20 bg-nude'>
          <BsPerson className='w-11 h-10' />
        </div>
        <div className='space-y-3'>
          <h1 className='text-2xl font-secondary'>Learn more about Luminalux</h1>
          <button onClick={handleAbout}
          className='text-sm md:text-lg font-primary px-3 md:px-6 py-2 flex items-center border-2 border-brown1 hover:bg-brown1 hover:text-nude hover:-translate-y-2 duration-300 transition-all cursor-pointer'>
            About us
            <BsArrowRight className='ml-2 w-8 h-8'/>
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-7'>
      <div className='border-2 border-brown1 p-4 w-20 h-20 bg-nude'>
        <BsBagDash className='w-11 h-10' />
      </div>
        <div className='space-y-3'>
          <h1 className='text-2xl font-secondary'>Check out new product</h1>
          <button onClick={handleProduct}
          className='text-sm md:text-lg font-primary px-3 md:px-6 py-2 flex items-center border-2 border-brown1 hover:bg-brown1 hover:text-nude hover:-translate-y-2 duration-300 transition-all cursor-pointer'>
            Go shipping now
            <BsArrowRight className='ml-2 w-8 h-8'/>
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-7'>
        <div className='border-2 border-brown1 p-4 w-20 h-20 bg-nude'>
          <BsEnvelopeArrowDown className='w-11 h-10' />
        </div>
        <div className='space-y-1'>
          <h1 className='text-2xl font-secondary'>Where to find us</h1>
          <p className='font-semibold'>luminaluxskincare@gmail.com</p>
          <p className='font-semibold'>luminaluxproduct@gmail.com</p>
          <p className='lg:w-[80%] font-semibold'>Our response time is 24 hours for general inquiries and customer support-related matters.</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Details
