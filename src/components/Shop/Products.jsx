import FilterPanel from "../FilterPanel";
import { products } from '../../constants/index';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../slices/WishlistSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [itemsPerPage] = useState(9);
  const [items, setItems] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();
  const wishlistProducts = useSelector(state => state.wishlist.products) || [];
  const isInwishlist = wishlistProducts.some(product => product._id === product.id);

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // Sorting logic
  const sortItems = (items, option) => {
    const sortedItems = [...items];

    switch (option) {
      case 'A-Z':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-to-high':
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sortedItems;
  };

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    const sortedItems = sortItems(items, newSortOption);
    setItems(sortedItems);
    setCurrentPage(1);
    setSearchParams({ page: 1 });
  };

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


  const menuItems = [...new Set(products.map((product) => product.category))];

  const filterItems = (category) => {
    const filtered = category === "all"
      ? products
      : products.filter((product) => product.category === category);

    setItems(filtered);
    setSelectedTab(category);
    setCurrentPage(1);
    setSearchParams({ page: 1 });
  };

  // Pagination logic
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
    <div className='p-[5%] lg:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% text-brown3 font-primary'>
      <div>
        <FilterPanel
          menuItems={menuItems}
          filterItems={filterItems}
          selectedTab={selectedTab}
          handleSortChange={handleSortChange}
          sortOption={sortOption}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 cursor-pointer text-brown3'>
          {currentItems.map((product) => (
            <div key={product._id} className='flex flex-col border border-brown3 py-10 px-7 space-y-4'>
              <div onClick={() => handleProductClick(product._id)}>
                <img src={product.image} alt={product.name} className='mb-5 hover:scale-105 transition-all duration-200' />
              </div>

              <div>
                <h2 className='text-lg font-primary capitalize truncate overflow-hidden whitespace-nowrap'>{product.name}</h2>

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
        <div className='flex justify-center my-8'>
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
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
  );
};

export default Products;
