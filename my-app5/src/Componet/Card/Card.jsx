import React from 'react'

import { BsBag } from "react-icons/bs";
import { VscStarFull } from "react-icons/vsc";

const Card = ({item}) => {
  return (
    <div className='card'>
        <img src={item.img} alt="img" />
        <h4>{item.title}</h4>
        
        <div className='row1'>
          <div className='icon'>
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          <VscStarFull />
          </div>
          <span>{item.reviews}</span>
        </div>

        <div className='row2'>
          <div className='row1'>
          <span className='line'>{item.prevPrice}</span>          <span>{item.newPrice}</span>
          </div>

          <BsBag />
        </div>
      </div>
  )
}

export default Card