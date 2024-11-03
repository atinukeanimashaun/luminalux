import React from 'react'
import { BsX } from 'react-icons/bs'

const Cart = ({cartOpen, toggleCart}) => {
  return (
    <div className={`fixed top-0 right-0 w-full md:w-[600px] h-full bg-brown shadow-lg opacity-100 z-[1000] transform overflow-y-scroll ${
      cartOpen ? 'translate-x-0 ' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out`}
    style={{ overflowY: 'auto' }}>
      <div className="flex items-start justify-between p-10">
        <h1 className='text-lg md:text-2xl uppercase center'>
        cart
        <span className='pl-2'>(0)</span>
        </h1>
        <div onClick={toggleCart}
        className="py-3 text-2xl absolute top-8 right-5">
          <BsX className="h-8 w-8" />
        </div>
      </div>
      <div className='border-y-2 border-y-brown3'>

      </div>
    </div>
  )
}

export default Cart
