import React from 'react'
import './header.css'
import { NavLink } from "react-router";
import Buttons from './Button';
const Header = () => {
  return (
    <div className='flex justify-around items-center'>
      {/* Logo */}
      <div className="logo">
      <p className='font-bold text-2xl text-white cursor-pointer'>Food <span className='text-orange-400'>Recipes</span></p>
      </div>
      {/* Links */}
      <div className="links flex gap-10 font-serif text-lg underline text-white">
        <NavLink className="hover:text-orange-500">Recipes</NavLink>
        <NavLink className="hover:text-orange-500">Favourites</NavLink>
      </div>
      {/* Download Button */}
      <div className="w-[20%]">
        <Buttons ButtonText='download Now'/>
      </div>
    </div>
  )
}

export default Header
