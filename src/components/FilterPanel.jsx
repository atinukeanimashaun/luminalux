import React from 'react'
import { MdFilterList } from "react-icons/md";

const FilterPanel = ({ menuItems, filterItems, selectedTab, handleSortChange, sortOption }) => {

  return (
    <div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-4 mb-8'>
          <div className='flex flex-row justify-start md:items-center flex-wrap gap-4 md:gap-8'>
            {/* "All" button */}
            <button
              onClick={() => filterItems('all')}
              className={`capitalize font-semibold px-4 py-1 rounded-full hover:-translate-y-2 duration-200 transition-all cursor-pointer ${
                selectedTab === 'all' 
                  ? 'border border-brown3 bg-nude1 hover:bg-nude' 
                  : 'hover:bg-nude1'
              }`}
            >
              all
            </button>

            {/* Category buttons */}
            {menuItems.map((product) => (
              <button
                key={product}
                onClick={() => filterItems(product)}
                className={`capitalize font-semibold px-4 py-1 rounded-full hover:-translate-y-2 duration-200 transition-all cursor-pointer ${
                  selectedTab === product
                    ? 'border border-brown3 bg-nude1 hover:bg-nude' 
                    : 'hover:bg-nude1'
                }`}
              >
                {product}
              </button>
            ))}
          </div>

          <div className='flex justify-end mb-4 rounded-sm bg-brown'>
            <div>
              <MdFilterList className='h-8 w-8'/>
            </div>
            <select name="sort" id="sort"
            onChange={handleSortChange}
            value={sortOption}
            className='px-3 py-1 bg-brown text-brown3 outline-0'>
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default FilterPanel
