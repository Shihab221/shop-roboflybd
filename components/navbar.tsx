"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineBell, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { IoMenu, IoClose } from "react-icons/io5";
import Login from '@/components/Login';
import Sidebar from './MobileSidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [loginOpen, setLoginOpen] = useState(false); // Login modal state

  return (
    <div>
      {/* Topbar (Mobile & Desktop) */}
      <div className="fixed top-0 w-full bg-slate-950 text-white flex items-center justify-between px-5 py-3 md:relative z-50 max-w-full ">
        {/* Hamburger & Logo */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
            <IoMenu />
          </button>
          <Link href="/">
            <div className="flex flex-col">
              <h1 className="text-2xl text-green-400 font-semibold">ROBOFLYBD</h1>
              <span className="text-gray-500 text-sm">Robotics Shop</span>
            </div>
          </Link>
        </div>

        {/* Search (Desktop Only) */}
        <div className="hidden md:block flex-1 max-w-5xl">
          <input
            type="text"
            placeholder="Search . . ."
            className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-800"
          />
        </div>

        {/* Desktop Icons & Login */}
        <div className="hidden md:flex space-x-4">
          <AiOutlineHeart size={24} />
          <AiOutlineBell size={24} />
          <Link href="/cart" className='flex space-x-2'>
            <AiOutlineShoppingCart size={24} />
            <p className='text-sm'>7</p>
          </Link>
          <button 
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 w-full bg-slate-950 text-white flex justify-around items-center py-3 md:hidden max-w-full">
        <AiOutlineHeart size={24} />
        <AiOutlineBell size={24} />
        <Link href="/cart" className="flex space-x-2">
          <AiOutlineShoppingCart size={24} />
          <p className="text-sm">7</p>
        </Link>
        <button 
          className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => setLoginOpen(true)}
        >
          Login
        </button>
      </div>

      {/* Login Modal */}
      {loginOpen && <Login setIsOpen={setLoginOpen} />}
    </div>
  );
};

export default Navbar;
