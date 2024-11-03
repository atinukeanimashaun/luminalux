import React from 'react'
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Details from './Details';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector(state => state.cart.products) || [];


  return (
    <div className='p-[5%] xl:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% text-brown3 font-primary'>
      <div className='py-8 flex items-center gap-2'>
        <button onClick={() => navigate('/')} className='flex items-center justify-center gap-2 text-md font-semibold'>
          Cart
          <BsChevronRight size={18} />
        </button>
        <p className='text-md font-bold capitalize truncate sm:max-w-[150px]'>
          Checkout
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-between gap-28'>
        <div className="w-full">
          <form>
            <div>
              <div className="flex justify-between mb-8">
                <p>Customer Info</p>
                <p>* Required</p>
              </div>

              <div className="bg-brown py-8 px-4">
                <label htmlFor="email" className="text-[14px] md:text-[16px]">Email</label>
                <input
                  type="email"
                  name='email'
                  id='email'
                  autoComplete="on"
                  className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-12 mb-8">
                <p>Shipping Address</p>
                <p>* Required</p>
              </div>

              <div className="bg-brown py-8 px-4 space-y-10">
                <div>
                  <label htmlFor="fullName" className="text-[14px] md:text-[16px]">Full Name</label>
                  <input
                    type="fullName"
                    name='fullName'
                    id='fullName'
                    className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                  />
                </div>

                <div>
                  <label htmlFor="address" className="text-[14px] md:text-[16px]">Street Address 1</label>
                  <input
                    type="address"
                    name='address'
                    id='address'
                    className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                  />
                </div>

                <div>
                  <label htmlFor="address" className="text-[14px] md:text-[16px]">Street Address 2</label>
                  <input
                    type="address"
                    name='address'
                    id='address'
                    className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                  />
                </div>

                <div className="flex gap-2">
                  <div>
                    <label htmlFor="address" className="text-[14px] md:text-[16px]">City</label>
                    <input
                      type="address"
                      name='address'
                      id='address'
                      className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="text-[14px] md:text-[16px]">State/Province</label>
                    <input
                      type="address"
                      name='address'
                      id='address'
                      className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="text-[14px] md:text-[16px]">Zip/Postal Code</label>
                    <input
                      type="address"
                      name='address'
                      id='address'
                      className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address">Country</label>
                  <input
                    type="address"
                    name='address'
                    id='address'
                    placeholder='Nigeria'
                    className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                  />
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-8">Shipping Method</p>
              <div className="bg-brown p-8">
                <div className="bg-nude py-20 text-center">
                  No Shipping method are available for the address given.
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-12 mb-8">
                <p>Payment Info</p>
                <p>* Required</p>
              </div>

              <div className="bg-brown p-8 space-y-10">
                <div>
                  <label htmlFor="number" className="text-[14px] md:text-[16px]">Card Number</label>
                  <input
                    type="number"
                    name='number'
                    id='number'
                    className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                  />
                </div>

                <div className="flex justify-between gap-5">
                  <div className="w-full">
                    <label htmlFor="address" className="text-[14px] md:text-[16px]">Expiration Date</label>
                    <input
                      type="address"
                      name='address'
                      id='address'
                      className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="address" className="text-[14px] md:text-[16px]">Security Code</label>
                    <input
                      type="address"
                      name='address'
                      id='address'
                      className='input1 p-3 border-b border-brown1 bg-transparent outline-none w-full font-primary'
                    />
                  </div>
                </div>

                <div>
                  <input
                    type='checkbox'
                    id=""
                    name=""
                    value=""
                  />
                  <label>
                    Billing address same as shipping
                  </label>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-12">
            <p>Items in Order</p>

            <div className="flex items-center gap-8 bg-brown p-3 mt-4">
              <ul className="w-full">
                {cartProducts.length > 0 && cartProducts.map(product => (
                  <li key={product.id} className="flex justify-between items-center my-3 px-2 cursor-pointer">
                    <div className="flex gap-4 pt-3">
                      <div className="w-20 h-20 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.image}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h1 className="font-semibold text-[14px] md:text-[18px] max-w-[100px] md:max-w-[250px] truncate overflow-hidden">
                          {product.name}
                        </h1>

                        <p className="text-[14px] md:text-[18px]">
                          Protect
                        </p>

                        <p className="text-[14px] md:text-[18px]">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3">
                      <h4 className="text-[14px] md:text-[18px] font-bold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-brown px-8 pt-8 pb-4">
          <Details />
        </div>
      </div>
    </div>
  )
}

export default Checkout
