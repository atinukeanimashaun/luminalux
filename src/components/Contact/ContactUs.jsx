import React from 'react'
import Details from '../Details'

const ContactUs = () => {
  return (
    <div className=' pt-[5rem] md:pt-[7rem] px-[1.5rem] lg:px-[6rem] text-brown1 bg-gradient-to-r from-brown from-0% to-nude1 to-100%  font-primary'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-[60%] mb-16'>
          <div className='space-y-5'>
            <h1 className='flex flex-col capitalize font-secondary text-4xl md:text-8xl'>need help? <span className='pt-3'>Contact us!</span></h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quod rem dicta? Iusto vero dolores enim inventore officia ullam neque excepturi. Eos repudiandae veniam nihil fugiat delectus praesentium blanditiis quidem.</p>
          </div>
          <div>
            <form className='space-y-6 mt-12'>
              <div className='flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="firstName" className='text-xl font-semibold capitalize'>first name</label>
                  <input type="firstName" name='firstName' id='firstName' placeholder='Enter your first name'
                  className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary' />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="lastName" className='text-xl font-semibold capitalize'>last name</label>
                  <input type="lastName" name='lastName' id='lastName' placeholder='Enter your last name' 
                  className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary' />
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="signup-email" className='text-xl font-semibold capitalize'>email address</label>
                  <input 
                  type="email" 
                  name='email' 
                  id='signup-email' 
                  placeholder='Enter your email'
                  autoComplete="on"
                  className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary' />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="Select your reason" className='text-xl font-semibold capitalize'>reason</label>
                  <select className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary' name="reason" id="Select your reason">
                    <option value="Select your reason">Select your reason</option>
                    <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                    <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                    <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="phone" className='text-xl font-semibold capitalize'>phone</label>
                <input 
                type="phone" 
                name='phone' 
                id='phone' 
                placeholder='Enter your phone number' 
                autoComplete="on"
                className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="message" className='text-xl font-semibold capitalize'>message</label>
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Enter your message' className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'></textarea>
              </div>
              <button type='submit' value="send" className='p-4 text-nude text-xl bg-brown1 hover:bg-transparent hover:text-brown1 hover:border hover:border-brown1 hover:-translate-y-4 duration-300 transition-all capitalize cursor-pointer'>send message</button>
            </form>
          </div>
        </div>
        <div className='lg:w-[40%]'>
         <Details />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
