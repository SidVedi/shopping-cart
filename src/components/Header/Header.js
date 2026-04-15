import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const itemCount = useSelector((store) => store.cart.items.length);
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-slate-900 text-white shadow-md'>
        <div className='flex items-center'>
          <img className='w-8 h-8' src="https://rukminim2.flixcart.com/fk-p-flap/52/44/image/d2ecfddf891a3922.png?q=60"/>
          <div className='pl-2 text-xl font-black italic tracking-tight text-amber-300 drop-shadow-sm'>
            Flopkart
          </div>
        </div>
        <div className='relative flex items-center pr-2'>
            <FaShoppingCart className='text-2xl'/>
            {
            itemCount > 0 && 
            <div className='absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
              {itemCount}
            </div>
            }
        </div>
    </div>
  )
}

export default Header;