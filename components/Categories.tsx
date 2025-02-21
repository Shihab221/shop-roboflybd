import React from 'react'
import { categories } from "../Constant.jsx";
import Image from 'next/image';
const Categories = () => {
  return (
    <div className='m-4'>
      <h2 className='text-2xl'>Categories</h2>
      <div className='flex flex-row space-x-4 mt-2'>
      
      {
        categories.map((item,index)=>(
            <div key={index} className=' rounded-md bg-gray-800 p-4 text-center cursor-pointer hover:scale-105'>
                <Image src={item.image} 
                alt='category icon' 
                width="120"
                height="120"
                className='rounded-md'
                />
            <h3 className='mt-4 text-xl text-gray-300'>{item.name}</h3>
            <p className='text-sm mt-2 text-gray-400'>Total Product : {item.total} </p>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Categories
