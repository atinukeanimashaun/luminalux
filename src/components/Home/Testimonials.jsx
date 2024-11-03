import React from 'react'
import Contact from "../../assets/contact.jpeg";
import { BsStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from '../../constants';


const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: <simpleNextArrow />,
    // prevArrow: <simplePrevArrow />
  };
  return (
    <div className='p-[5%] lg:px-[6rem] 2xl:px-[20rem] bg-nude text-brown1 font-primary'>
      <div className='flex flex-col md:flex-row md:items-center gap-7'>
        <div className='md:w-1/2 flex justify-center items-center'>
          <img src={Contact} alt="" className='w-[400px]  2xl:w-[850px] h-[500px] 2xl:h-[800px]'/>
        </div>
        <div className='md:w-1/2 pl-8 space-y-4 pb-10'>
          <h2 className='text-xl 2xl:text-2xl font-primary mb-8'>Product Testimonials</h2>

            <Slider  {...settings}>
              {
                testimonials.map((item) => (
                  <div key={item.id} className='space-y-4 px-3 md:px-6'>
                    <div className='flex space-x-2 text-xl md:text-2xl'>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p className='text-xl lg:text-3xl 2xl:text-5xl font-secondary'>{item.text}</p>
                    <p className='text-lg 2xl:text-xl italic'><span className='pr-1'>-</span>{item.name}</p>
                  </div>
              ))}
            </Slider>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonials
