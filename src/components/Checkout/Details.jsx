import React from 'react'
import { useSelector } from 'react-redux';

const Details = () => {
  const cartProducts = useSelector(state => state.cart.products) || [];
  const totalAmount = useSelector(state => state.cart.totalAmount) || 0;
  const subtotal = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
        <p className="pb-4 text-[25px] font-light">
          Order Summary
        </p>
        <div className="flex justify-between gap-10 pt-3 pb-8 border-b-[1px] border-b-brown3">
          <p className="texxt-[16px] font-semibold">Subtotal</p>
          <p className="texxt-[16px] font-semibold">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between gap-10 pt-8">
          <p className="texxt-[16px] font-semibold">Total</p>
          <p className="texxt-[18px] font-bold">$ {totalAmount.toFixed(2)}</p>
        </div>
        <button className="bg-brown3 font-bold text-[18px] text-nude w-full py-2 mt-8 mb-3 hover:-translate-y-2 duration-300 transition-all cursor-pointer">
          Pay Now
        </button>
        <p className="text-[14px]">
        By sending the request you can confirm that you accept our <span className="font-semibold text-brown1">Terms of Service</span> and <span className="font-semibold text-brown1">Privacy Policy</span>
        </p>
      </div>
  )
}

export default Details
