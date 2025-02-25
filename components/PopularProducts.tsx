import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  
  return (
    <div className="my-6 sm:mx-2 mx-4">
      <div className='flex flex-row justify-between'>
      <h2 className="text-2xl  px-2">Popular <span className='font-bold'>Products</span></h2>
      <button className='py-1 px-4 mx-2 rounded-full bg-sky-400/20 border-2 border-sky-500 text-sky-500'>All products {'>'} </button>
      </div>
      <div className="flex flex-row ">
       <ProductCard />
      </div>
    </div>
  );
};

export default PopularProducts;
