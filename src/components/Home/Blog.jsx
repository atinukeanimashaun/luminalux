import React from 'react'
import { Blogs } from '../../constants'
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const handleItemsClick = (id) => {
    navigate(`/item/${id}`);
  };
  
  return (
    <div className='p-[4%] pb-10 2xl:px-[20rem] bg-nude text-brown1 font-primary'>
      <div>
        <h2 className='text-xl 2xl:text-2xl'>Blogs</h2>
        <p className='text-4xl lg:text-6xl pt-2 font-secondary '>Scented stories for every mood</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start mt-6 text-brown3'>
        {
          Blogs.map((item) => (
            <div key={item.id} className='flex flex-col p-5 space-y-6'>
              <img src={item.imageUrl} alt="" />
              <p className='text-sm 2xl:text-xl'>{item.date}<span className='capitalize'>.bennet ethan</span></p>
              <h1 className='text-2xl lg:text-[30px] font-secondary'>{item.name}</h1>
              <p className='text-lg 2xl:text-2xl text-brown1'>{item.text}</p>
              <button 
              onClick={() => handleItemsClick(item.id)}
              className='text-xl 2xl:text-2xl pt-4 font-semibold text-brown3 flex items-center hover:underline cursor-pointer'>
                Read more
                <BsArrowRight className='mt-1 ml-2 w-6 h-6' />
              </button>
            </div>
        ))}
      </div>
      <Link to='/blog' 
      className='text-xl w-[85%] md:w-[40%] lg:w-[30%] xl:w-[20%] 2xl:w-[15%] px-4 md:px-6 py-2 flex items-center border-2 border-brown1 hover:bg-brown1 hover:text-nude hover:-translate-y-4 duration-300 transition-all cursor-pointer'>
        View more articles
        <BsArrowRight className='mt-1 ml-2 w-6 h-6' />
      </Link >
    </div>
  )
}

export default Blog
