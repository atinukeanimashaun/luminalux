import React, { useState } from 'react'
import { BsX, BsCart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin3Line } from "react-icons/ri";
import { removeFromCart, updateCart } from '../slices/CartSlice';
import { Link } from 'react-router-dom';

const CartOffset = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.products) || [];
  const subtotal = cartProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    console.log(`Updating quantity for ID: ${id}, New Quantity: ${newQuantity}`);

    if (newQuantity >= 0) {
      dispatch(updateCart({ id, quantity: newQuantity }));
    }
  };


  return (
    <div>
      <button onClick={() => { setOpen(true) }} className="flex items-center cursor-pointer text-sm md:text-lg lg:text-xl 2xl:text-3xl font-medium uppercase center relative">
        <BsCart className='w-6 h-6' />

        <span className='text-[10px] pl-1 hover:underline absolute -top-3 md:-top-4 left-2 md:left-2'>({cartProducts.length})</span>
      </button>

      <div className={`w-full fixed top-0 right-0 h-screen ${open ? 'block' : 'hidden'} max-h-screen z-50`}>
        <div className={`bg-brown z-[100] ${open ? 'translate-x-0' : 'translate-x-full'} w-full max-w-xl h-full ml-auto relative  flex flex-col justify-between`}>
          <div className="max-h-[80vh] overflow-y-auto custom-scroll">
            <div className="w-full flex justify-center items-center py-6 px-4">
              <div className="w-11/12">
                <h1 className='text-lg md:text-2xl uppercase center'>
                  cart
                  <span className='pl-1 text-[14px]'>({cartProducts.length})</span>
                </h1>
              </div>

              <div className="w-1/12">
                <button onClick={() => { setOpen(false) }} className="p-3">
                  <BsX className="h-8 w-8" />
                </button>
              </div>
            </div>

            <div className="border-t-[1px] border-t-brown3 px-3 md:px-6">
              <ul className=" divide-y divide-brown3 ">
                {cartProducts.length > 0 && cartProducts.map(product => (
                  <li key={product.id} className="flex justify-between items-end my-3 px-2 py-5 cursor-pointer">
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

                        <h4 className="text-[14px] md:text-[18px] font-bold">
                          ${(product.price * product.quantity).toFixed(2)}
                        </h4>

                        <button onClick={() => handleRemoveProduct(product._id)} className="pt-1 text-red-500">
                          <RiDeleteBin3Line className="w-[20px] h-[20px]" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-3">
                      <input
                        type="number"
                        className="focus:outline-none focus:border-none w-20 bg-brown4 rounded-lg p-2 text-center"
                        value={product.quantity}
                        min="0"
                        onChange={(e) => handleQuantityChange(product._id, e)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 border-t-[1px] border-t-brown3">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl">Subtotal:</h2>
              <h2 className="font-semibold text-xl">${subtotal.toFixed(2)}</h2>
            </div>
            <div className="flex flex-col items-center gap-3 mt-3 ">
              <Link to="/checkout" className="bg-brown3 text-center text-[18px] text-nude w-full py-2 mb-3 hover:-translate-y-2 duration-300 transition-all cursor-pointer">
                Checkout now
              </Link>
              <Link to="/mycart" className="bg-brown3 text-center text-[18px] text-nude w-full py-2 mb-3 hover:border-2 hover:border-brown3 hover:bg-transparent hover:text-brown3 hover:-translate-y-2 duration-300 transition-all cursor-pointer">
                Go to cart
              </Link>
            </div>
          </div>
        </div>

        <div onClick={() => { setOpen(false) }} className={`h-full w-full z-[60] fixed top-0 ${open ? 'translate-x-0' : 'translate-x-full'} bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}></div>
      </div>
    </div>
  )
}

export default CartOffset
