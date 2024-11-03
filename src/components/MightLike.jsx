import React from 'react'
import { features } from '../constants'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { addToWishlist } from '../slices/WishlistSlice';
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';


const MightLike = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistProducts = useSelector(state => state.wishlist.products) || [];
  const isInwishlist = wishlistProducts.some(product => product._id === product.id);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  }

  const handleAddToWishlist = (product) => {
    if (!isInwishlist) {
      dispatch(addToWishlist(product));
    } else {
      console.error("Product is undefined!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-light py-5">
        You might also like
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 cursor-pointer text-brown3'>
        {
          features.map((product) => (
            <div key={product.id} 
            className='flex flex-col border border-brown3 p-10 space-y-4 '>
            <div onClick={() => handleProductClick(product._id)}>
              <img src={product.image}
              // width={250}
              // height={250}
              alt={product.name} 
              className='mb-5 hover:scale-105 transition-all duration-200'/>
            </div>

            <div>
              <h2 className='text-lg font-primary capitalize w-[70%] truncate overflow-hidden whitespace-nowrap'>{product.name}</h2>

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

      <div className='flex justify-center pt-5'>
        <a href='/shop'
        className='text-sm md:text-lg font-primary px-3 md:px-6 py-2 flex items-center border-2 border-brown1 hover:bg-brown1 hover:text-nude hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
          More products
          <BsArrowRight className='ml-2 w-8 h-8'/>
        </a>
      </div>
    </div>
  )
}

export default MightLike
