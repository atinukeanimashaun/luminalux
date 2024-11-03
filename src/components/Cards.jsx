import React from 'react'
import {features} from "../constants";

const Cards = () => {
  return (
    <div className='b0rder-2 border-brown3'>
      <div className=''>
        {
          features.map((item) => (
          <div key={item.id} >
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div>
              <h2></h2>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
