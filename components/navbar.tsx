"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Login from '@/components/Login';
import { AiOutlineBell, AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 w-full md:relative">
      <div className="flex items-center justify-between px-10 py-2 bg-slate-950 text-white">
        {/* Logo and title */}
        <div className="flex items-center space-x-2 mx-4 sm:pr-4">
          <Link href="/">
            <div className='flex flex-col'>
              <h1 className="text-2xl text-green-400 font-semibold">ROBOFLYBD</h1>
              <span className="text-gray-500">Robotics Shop</span>
            </div>
          </Link>
        </div>

        {/* Search input */}
        <div className="flex-1 max-w-5xl hidden md:block">
          <input
            type="text"
            placeholder="Search . . ."
            className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-black bg-gray-800"
          />
        </div>

        <div className='px-4 flex flex-row space-x-4 mx-4'>
          <AiOutlineHeart size={24} />
          <AiOutlineBell size={24} />
          <Link href="/cart" className='flex justify-evenly space-x-2'>
            <AiOutlineShoppingCart size={24} />
            <p className='text-sm'>7</p>
          </Link>
        </div>

        <div className="flex items-center space-x-4 ">
          <button 
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setIsOpen(true)}
          >
            Login
          </button>
        </div>
      </div>

      {isOpen && <Login setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;