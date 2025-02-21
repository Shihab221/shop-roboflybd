import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  
  return (
    <div className="m-4">
      <h2 className="text-2xl">Popular Products</h2>
      <div className="flex flex-row">
       <ProductCard />
      </div>
    </div>
  );
};

export default PopularProducts;
