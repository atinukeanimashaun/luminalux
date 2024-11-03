import React from 'react'

const Appointment = () => {
  return (
    <div className='pt-[25%] md:pt-[10%] lg:pt-[4%] pb-[5%] px-[2rem] lg:px-[3rem] xl:px-[6rem] 2xl:px-[20rem] bg-nude1 font-primary'>
      <div className="text-center">
        <h2 className='text-[16px] md:text-xl text-brown3'>Booking Form</h2>

        <p className='text-3xl md:text-6xl pt-2 font-secondary text-brown3'>Make Appointment</p>
      </div>

      <div className="flex items-center justify-center mt-7">
        <div className="bg-brown4 p-8 w-full lg:mx-8">
          <form className='md:space-y-6 '>
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <input
                type="yourName"
                name='yourName'
                id='yourName'
                placeholder='Your name'
                className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary'
              />

              <input
                type="email"
                name='email'
                id='signup-email'
                placeholder='Your email'
                autoComplete="on"
                className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary'
              />

              <input
                type="phone"
                name='phone'
                id='phone'
                placeholder='Enter your phone number'
                autoComplete="on"
                className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary'
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 w-full mt-[8px] md:mt-0">
              <select className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary' name="services" id="Service">
                <option value="Select your reason">Services</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
              </select>

              <input
              type="date"
              name='date'
              id='date'
              placeholder='DD-MM-YY'
              autoComplete="on"
              className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary' 
              />

              <select className='input1 p-3 border border-brown1 bg-nude outline-none w-full font-primary' name="time" id="Time">
                <option value="Select your reason">Time</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
                <option value="Lorem ipsum, dolor sit.">Lorem ipsum, dolor sit.</option>
              </select>
            </div>

            <button type='submit' value="send" className='w-full py-4 mt-6 text-nude text-xl bg-brown1 hover:bg-transparent hover:text-nude hover:border hover:border-nude hover:-translate-y-2 duration-300 transition-all capitalize cursor-pointer'>make appointment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Appointment
