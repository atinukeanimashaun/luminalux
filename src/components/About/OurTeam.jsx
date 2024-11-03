import React, { useState} from 'react'
import { ourTeam } from '../../constants'
import { BiMinus, BiPlus } from "react-icons/bi";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";

const OurTeam = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className='p-[5%] pt-[10%] lg:px-[6rem] bg-nude text-brown1 font-primary'>
      <div className='flex flex-col items-center space-y-2'>
        <p className='text-xl'>our team</p>
        <h1 className='text-3xl md:text-5xl font-secondary md:w-[70%] lg:w-[50%] text-center'>The heart and soul behind the scents</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          ourTeam.map((item, index) =>(
            <div key={item.id} className='flex flex-col p-6'>
              <figure className='border border-brown3 bg-brown3'>
                <img src={item.imageUrl}
                 alt="" className=''/>
              </figure>
              <div onClick={() => toggleAccordion(index)}
               className='pt-7 pb-4 border-b border-b-brown3'>
                <div
                className='flex justify-between items-center '>
                  <div>
                    <h1 className='text-2xl capitalize font-secondary pb-2'>{item.name}</h1>
                    <p className='capitalize text-xl'>
                    {item.title}
                    </p>
                  </div>
                  <div className='text-3xl'>
                  {openIndex === index ? <BiMinus /> : <BiPlus />}
                  </div>
                </div>
                <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out pt-6 ${
                  openIndex === index
                    ? "grid-row-[1fr] block" 
                    : "grid-row-[0fr] hidden"
                }`}>
                  <div>
                    {item.desc}
                    <div className='flex space-x-3 pt-2 cursor-pointer mb-12'>
                      <LiaFacebookSquare className='w-10 h-10' />
                      <RiTwitterXLine className='w-8 h-8 mt-1' />
                      <LiaInstagram className='w-10 h-10' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
    <div className='bg-brown3 p-[5%] lg:px-[6rem] font-primary text-nude grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-3 md:divide-x-2 divide-nude'>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl lg:text-5xl font-secondary'>4.9</h1>
        <p className='lg:text-xl text-nude1'>customer satisfaction</p>
      </div>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl lg:text-5xl font-secondary'>50+</h1>
        <p className='lg:text-xl text-nude1'>Variety of Product</p>
      </div>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl lg:text-5xl font-secondary'>4+</h1>
        <p className='lg:text-xl text-nude1'>Years in Business</p>
      </div>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl lg:text-5xl font-secondary'>100%</h1>
        <p className='lg:text-xl text-nude1'>Eco-Friendly Initiatives</p>
      </div>
    </div>
    </>
  )
}

export default OurTeam
