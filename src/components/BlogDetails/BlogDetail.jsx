import { journal } from '../../constants';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { anua2 } from '../../assets';
import { LiaFacebookSquare, LiaInstagram } from 'react-icons/lia';
import { RiTwitterXLine } from 'react-icons/ri';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('ID from params:', id);
    console.log('Journal:', journal);

    const foundItem = journal.find((item) => item.id === id);

    if(foundItem) {
    setItems(foundItem);
    } else {
      console.log("Item not found");
    }

    setIsLoading(false);
  }, [id]);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items ) {
    return <p className='pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary text-brown1 text-2xl'>Product not found</p>;
  }


  return (
    <div
    className='pt-[25%] md:pt-[5%] pb-[5%] px-3 lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% font-primary text-brown1'
    >
       <div className='flex flex-col items-center gap-2'>
        <p className='text-base capitalize mb-4'>{items.date}</p>
        <h1 className='text-3xl font-thin font-secondary'>{items.name}</h1>
        <div>
          <img src={items.imageUrl} alt={items.name} 
          className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="px-3 md:px-0 m-auto mt-[3rem] w-full max-w-[650px] lg:max-w-[900px] space-y-6 text-lg md:text-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel. Lobortis mattis aliquam faucibus purus in massa tempor nec. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Interdum velit laoreet id donec ultrices tincidunt arcu non. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien eget mi proin sed libero enim sed faucibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus
        </p>
        <div className='bg-brown p-8 border-l-4 border-l-brown3'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus morbi nullam posuere vestibulum viverra nec quam vivamus. Quis scelerisque viverra ornare ut metus. Eu vitae ornare tincidunt elit.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-light text-xl md:text-2xl">
            Lorem Ipsum
          </h2>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus morbi nullam posuere vestibulum viverra nec quam vivamus. Quis scelerisque viverra ornare ut metus. Eu vitae ornare tincidunt elit. Lacus molestie aliquam odio justo bibendum diam eget. Vel suspendisse lacus euismod et ut euismod proin. Ultricies mollis nunc vitae donec. Pellentesque senectus
          </p>
          <img src={anua2} alt={anua2} />
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspen
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-light text-xl md:text-2xl">Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris:</p>
          <div className="pl-5">
            <ul className="list-disc">
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
            </ul>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus morbi nullam posuere vestibulum viverra nec quam vivamus. Quis scelerisque viverra ornare ut metus. Eu vitae ornare tincidunt elit. Lacus molestie aliquam odio justo bibendum diam eget. Vel suspendisse lacus euismod et ut euismod proin. Ultricies mollis nunc vitae donec. Pellentesque senectus</p>
        </div>
        <div className='bg-brown p-8 border-l-4 border-l-brown3'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus morbi nullam posuere vestibulum viverra nec quam vivamus. Quis scelerisque viverra ornare ut metus. Eu vitae ornare tincidunt elit.
          </p>
        </div>
        <div>
          <img src={anua2} alt={anua2} />
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspen
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-light text-xl md:text-2xl">Lorem Ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris:</p>
          <div className="pl-5">
            <ol className="list-decimal">
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
              <li>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices</li>
            </ol>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Neque penatibus pellentesque ultrices tellus suspendisse nulla velit. Ligula pellentesque neque commodo tellus lectus aliquam enim vestibulum. Fusce neque ac mauris convallis eu velit. Amet arcu venenatis massa mauris lobortis sed volutpat. Vivamus purus morbi nullam posuere vestibulum viverra nec quam vivamus. Quis scelerisque viverra ornare ut metus. Eu vitae ornare tincidunt elit. Lacus molestie aliquam odio justo bibendum diam eget. Vel suspendisse lacus euismod et ut euismod proin. Ultricies mollis nunc vitae donec. Pellentesque senectus</p>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <p>
            Share this article
          </p>
          <div className='flex space-x-3 mt-2 cursor-pointer mb-12'>
            <LiaFacebookSquare className='w-10 h-10' />
            <RiTwitterXLine className='w-8 h-8 mt-1' />
            <LiaInstagram className='w-10 h-10' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
