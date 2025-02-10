import React from 'react'
import { features } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../slices/WishlistSlice";

const Feature = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistProducts = useSelector(state => state.wishlist.products) || [];
  const isInwishlist = wishlistProducts.some(product => product._id === product.id);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToWishlist = (product) => {
    if (!isInwishlist) {
      dispatch(addToWishlist(product));
    } else {
      console.error("Product is undefined!");
    }
  };

  return (
    <div className='p-[5%] lg:px-[8rem] bg-nude'>
      <div className='flex flex-col items-center text-center space-y-2 mb-12'>
        <p className='text-brown1 text-xl md:text-2xl 2xl:text-3xl font-primary pb-4'>Our featured products</p>
        <h1 className='text-3xl lg:text-5xl text-brown3 font-secondary font-thin w-[70%] md:w-[65%] 2xl:w-[40%]'>Facial and skincare, natural and certified organic</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 cursor-pointer text-brown3'>
        {
          features.map((product) => (
            <div key={product._id}  
            className='flex flex-col border border-brown3 p-10 space-y-4 '>
            <div onClick={() => handleProductClick(product._id)}>
              <img src={product.image}
              // width={250}
              // height={250}
              alt={product.name} 
              className='mb-5 hover:scale-105 transition-all duration-200'/>
            </div>

            <div>
              <h2 className='text-xl font-primary capitalize w-[70%] truncate overflow-hidden whitespace-nowrap'>{product.name}</h2>

              <div className='flex justify-between items-end pt-3'>
                <h5 className='text-xl font-primary font-semibold'><span className='pr-2'>$</span>{product.price}</h5>

                <button
                  onClick={() => handleAddToWishlist(product)}
                  className={`text-lg p-2 ${isInwishlist ? 'bg-red-600 text-white' : 'bg-brown4 text-nude hover:bg-brown3'} transition-all duration-200 ease-linear rounded-full`}
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature
