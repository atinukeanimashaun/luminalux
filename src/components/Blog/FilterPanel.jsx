import React from 'react'

const FilterPanel = ({ menuItems, filterItems, selectedCategory }) => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-4 mb-8'>
      <div className='flex flex-row justify-start md:items-center flex-wrap gap-4 md:gap-8'>
        {/* "All" button */}
        <button
          onClick={() => filterItems('all')}
          className={`capitalize font-semibold px-4 py-1 rounded-full hover:-translate-y-2 duration-200 transition-all cursor-pointer ${
            selectedCategory === 'all' 
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
              selectedCategory === product
                ? 'border border-brown3 bg-nude1 hover:bg-nude' 
                : 'hover:bg-nude1'
            }`}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterPanel
