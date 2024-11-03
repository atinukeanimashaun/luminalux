import React from 'react'
import Details from './Checkout/Details';
import { useSelector } from 'react-redux';


const MyPurchases = () => {
  const cartProducts = useSelector(state => state.cart.products) || [];

  return (
    <div className='px-[5%] pt-[15%] md:pt-[10%] pb-[5%] lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% text-brown3 font-primary'>
      <div className='py-8 space-y-3'>
        <h1 className="text-4xl md:text-6xl lg:text-8xl">
          Your Order Confirmed
        </h1>

        <p className='text-xl'>
          Your order has been confirmed and will be shipping within next two days.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-between gap-28 mt-4'>
        <div className="w-full">
          <div>
            <div className="flex justify-between mb-8">
              <p className="text-xl">
                Customer Information
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 bg-brown py-8 px-4 w-full">
              <div className="w-full space-y-2">
                <h2 htmlFor="email" className="text-[14px] md:text-[16px]">
                  Email
                </h2>
               <p>/</p>
              </div>

              <div className="w-full space-y-2">
                <h2 htmlFor="address">
                  Shipping Address
                </h2>
                <p>/</p>
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
              <p className='text-xl'>Payment Info</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 bg-brown py-8 px-4 w-full">
              <div className="w-full space-y-2">
                <h2 className="text-[14px] md:text-[16px]">
                  Payment Info
                </h2>
                <p>/</p>
              </div>

              <div className="w-full space-y-2">
                <h2 className="text-[14px] md:text-[16px]">
                  Billing Address
                </h2>
                <p>/</p>
              </div>
            </div>

          </div>

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

export default MyPurchases;
