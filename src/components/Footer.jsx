import React from 'react'
import { links } from "../constants"
import { Link } from 'react-router-dom';
import { RiTwitterXLine } from "react-icons/ri";
import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";


const Footer = () => {
  return (
    <div className="p-[5%] lg:px-[2rem] font-primary text-brown1 bg-nude">
      <div className='mb-8 flex flex-col lg:flex-row justify-evenly gap-7'>
        <div className='flex flex-col items-center mb-10 px-8 border-b lg:border-b-0 border-b-brown1'>
          <a href="/"
          className=' uppercase font-secondary text-xl lg:text-3xl 2xl:text-4xl font-thin cursor-pointer flex flex-col mx-8'>luminalux
          <span className='text-xs lg:text-lg 2xl:text-xl text-center font-lobster lowercase pt-2 italic tracking-wide'>facial & skincare</span>
          </a>

          <p className='pt-10 md:pt-16 flex flex-col md:text-xl 2xl:text-3xl text-center'>
            Opening hours
          <span className='font-semibold'>Monday to Saturday:</span>
          <span className='font-semibold'>10:30 a.m. to 7 p.m.</span>
          </p>

          <div className='flex space-x-3 mt-8 cursor-pointer mb-12'>
            <LiaFacebookSquare className='w-10 h-10' />
            <RiTwitterXLine className='w-8 h-8 mt-1' />
            <LiaInstagram className='w-10 h-10' />
          </div>
        </div>

        <div className='grid grid-cols md:grid-cols-3 md:content-between md:justify-items-center gap-4 xl:gap-16 divide-y md:divide-y-0 divide-brown1'>
        <div className='px-12 md:px-3'>
          <h1 className='uppercase text-xl 2xl:text-3xl'>information</h1>
          <div className='space-y-4 mt-5 text-xl 2xl:text-2xl font-semibold'>
            {
              links.map((item) => (
                <Link key={item.id} to={item.link}
                className='flex flex-col hover:underline capitalize'>
                  {item.name}
                </Link>
            ))}
          </div>
        </div>

        <div className='px-12 md:px-1 xl:px-3 pt-6 md:pt-0'>
        <h1 className='uppercase text-xl 2xl:text-3xl'>our services</h1>
        <div className='space-y-4 mt-5 text-xl 2xl:text-2xl font-semibold flex flex-col capitalize'>
          <Link to='/return' className='hover:underline'>return policy</Link>
          <Link to='/terms' className='hover:underline'>Terms</Link>
          <Link to='/bookconsultation' className='hover:underline'>book a consultation</Link>
        </div>
        </div>

        <div className='px-12 md:px-3  pt-6 md:pt-0'>
          <h1 className='uppercase text-xl 2xl:text-3xl'>my account</h1>
          <div className='space-y-4 mt-5 text-xl 2xl:text-2xl font-semibold flex flex-col capitalize'>
          <Link to='/mycart' className='hover:underline'>my cart</Link>
          <Link to='/checkout' className='hover:underline'>checkout</Link>
          </div>
        </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center text-2xl 2xl:text-4xl 2xl:px-[20rem]'>
        <p> © Designed by <span className='font-semibold capitalize'>tinu</span>.</p>
        <p className='capitalize'>licenses</p>
      </div>
    </div>
  )
}

export default Footer
