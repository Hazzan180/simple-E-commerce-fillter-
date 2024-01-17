import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

const Navigation = ({handleInputChange, openMenu}) => {
  return (
    <div className='navigation'>
      <CiMenuBurger className='open' onClick={openMenu}/>
      <input type="text" placeholder='Enter your search'  onChange={handleInputChange}/>

      <div className='nav-icons'>
        <IoMdHeartEmpty />
        <BsCart2 />
        <FaRegUser />
      </div>
    </div>
  )
}

export default Navigation