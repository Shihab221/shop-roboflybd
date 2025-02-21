import React from 'react'
import  bell  from '../public/Images/bell.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2 bg-slate-950 text-white ">
      {/* Logo and title */}
      <div className="flex  items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-md" />
        <div className='flex flex-col'>
        <h1 className="text-lg text-green-400 font-semibold">ROBOFLYBD</h1>
        <span className="text-gray-500">Robotics Shop</span>
        </div>
      </div>

      {/* Search input */}
      <div className="flex-1 max-w-xl mx-4">
        <input
          type="text"
          placeholder="Search . . ."
          className="w-full px-3 py-2  rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-black bg-gray-800"
        />
      </div>
    <div className='flex flex-row'>
      <p>Cart :</p>
      <p className='text-green-400'>19</p>
    </div>
      {/* Notification and Add Report button */}
      <div className="flex items-center space-x-4">
        <Image src={bell} alt='bellicon' width={32} height={32} className='bg-white rounded-md p-1'/>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Login
        </button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
