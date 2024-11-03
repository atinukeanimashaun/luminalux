import React, { useEffect, useRef, useState } from 'react';
import { journal } from '../../constants';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterPanel from './FilterPanel';

const Blog = () => {
  const navigate = useNavigate();
  const [itemsPerPage] = useState(9);
  const productGridRef = useRef(null);
  const [items, setItems] = useState(journal);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleItemsClick = (id) => {
    navigate(`/item/${id}`);
  };

  const filterItems = (category) => {
    const filtered = category === "all" ? journal : journal.filter(item => item.category === category);
    setItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
    setSearchParams({ page: 1 });
  };

  const menuItems = [...new Set(journal.map(item => item.category))];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSearchParams({ page: pageNumber });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return (
    <>
      <div className="py-[5%] px-[1.5rem] xl:px-[6rem] bg-nude text-brown1">
        <FilterPanel
          menuItems={menuItems}
          filterItems={filterItems}
          selectedCategory={selectedCategory}
          items={items}
        />

        <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start mt-5 text-brown3">
          {currentItems.map(item => (
            <div key={item.id} className="flex flex-col py-6 md:p-5 space-y-2">
              <img src={item.imageUrl} alt={item.name} />
              <div className="space-y-6">
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
            </div>
          ))}
        </div>

        <div className='flex justify-center my-8'>
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-nude text-brown3" : "bg-nude1"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <a href="/about" className="bg-brown3 py-10 px-[5%] text-nude flex flex-col md:flex-row justify-between text-3xl font-secondary cursor-pointer hover:text-nude1">
        <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
        <BsArrowRight className="mt-1.5 ml-2" />
      </a>
    </>
  );
};

export default Blog;
