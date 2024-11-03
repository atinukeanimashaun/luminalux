import React, { useEffect, useState } from 'react'
import { BsX, BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin3Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { removeFromWishlist } from '../slices/WishlistSlice';

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [itemsPerPage] = useState(9);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const wishlistProducts = useSelector(state => state.wishlist.products);

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleRemoveProduct = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlistProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [wishlistProducts]);

  return (
    <div>
      <button onClick={() => { setOpen(true) }} className="flex items-center cursor-pointer text-sm md:text-lg lg:text-xl 2xl:text-3xl font-medium uppercase center">
        <BsHeart className='w-6 h-6' />
      </button>

      <div className={`w-full fixed top-0 right-0 h-screen ${open ? 'block' : 'hidden'} max-h-screen z-50`}>
        <div className={`bg-brown z-[100] ${open ? 'translate-x-0' : 'translate-x-full'} w-full h-full ml-auto relative`}>
          <div className="max-h-screen overflow-y-auto custom-scroll">
            <div className="w-full flex justify-center items-center py-6 px-4">
              <div className="w-11/12">
                <h1 className='text-lg md:text-2xl uppercase center'>
                  wishlist
                </h1>
              </div>

              <div>
                <button onClick={() => { setOpen(false) }}>
                  <BsX className="h-8 w-8" />
                </button>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 cursor-pointer text-brown3 border-y-[1px] border-y-brown3 p-6'>
              {wishlistProducts.length === 0 ? (
                <p>Your wishlist is empty.</p>
              ) : (
                currentItems.map(product => (
                  <div key={product._id} className='flex flex-col border border-brown3 py-10 px-7 space-y-4'>
                    <div onClick={() => handleProductClick(product._id)}>
                      <img src={product.image} alt={product.name} className='mb-5 hover:scale-105 transition-all duration-200' />
                    </div>
                    <div className='space-y-2 flex justify-between items-end'>
                      <div>
                        <h2 className='text-lg font-primary capitalize'>{product.name}</h2>
                        <h5 className='text-xl font-primary font-semibold'><span className='pr-2'>$</span>{product.price}</h5>
                      </div>
                      <div className="text-lg">
                        <button onClick={() => handleRemoveProduct(product._id)} className="bg-brown4 hover:bg-brown3 transition-all duration-200 ease-linear text-nude p-2 rounded-full">
                          <RiDeleteBin3Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className='flex justify-center my-8'>
              {Array.from({ length: Math.ceil(wishlistProducts.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-nude text-brown3" : "bg-nude1"}`}>
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div onClick={() => { setOpen(false) }} className={`h-full w-full z-[60] fixed top-0 ${open ? 'translate-x-0' : 'translate-x-full'} bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}></div>
      </div>
    </div>
  )
}

export default Wishlist;
