import React from 'react'
import { products } from '../Constant'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = () => {
  return (
    <div className='py-2 flex flex flex-col sm:flex-row '>
        {products.map((item,index)=>(
            <div key={index} className='p-2 flex flex-col items-center rounded-md bg-slate-800 my-2 mx-2'>
                <Link href={`/product/${item.id}`}>
                <Image 
                src={item.image}
                alt='product image'
                width={200}
                height={280}
                className='rounded-xl px-2 py-2'
                />
                <div className='flex flex-col'>
                <h4 className='mt-2 text-md text-center text-sm text-gray-200'>{item.title.length >30 ? item.title.slice(0,20) + "" : item.title}</h4>
                <p className='mt-2 px-4 text-md text-sky-200 text-end'>{item.discounted_price} Tk</p>
                </div>
                {/* <button className='bg-green-400 text-black px-2 py-1 hover:scale-105 hover:bg-gray-800 hover:text-sky-200 cursor-pointer rounded-md w-32 mt-2'
                >
                    See More</button>  */}
                {/* <button className='bg-gray-800 text-sky-200 px-2 py-1 hover:scale-105 hover:bg-green-400 hover:text-gray-800 cursor-pointer rounded-md w-32 mt-2'>Add to Cart</button> */}
                </Link>
            </div>
        ))}
    </div>

)}

export default ProductCard
