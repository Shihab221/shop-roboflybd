"use client"
import { useSearchParams } from 'next/navigation';
import { products } from '../../../Constant';

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // Get the 'id' from query parameters

  if (!id || isNaN(parseInt(id, 10))) {
    return <p>Invalid product ID</p>; // Handle invalid or missing IDs
  }

  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <div className='flex sm:flex-row flex-col'>
        <img
          src={product.image}
          alt={product.title}
          width= "400"
          height= "400"
          className="rounded-md my-4"
        />
        <div className='px-6 py-6'>
          <h2 className="text-2xl font-bold text-gray-300">{product.title}</h2>
          <p className="text-lg">Price: {product.discounted_price} Tk</p>
          <p className="text-gray-400 mt-2">{product.description}</p>
          <p className='text-gray-300 mt-4'>Status: <span className='text-green-500 bg-gray-800 rounded-full px-2'>In Stock</span></p>
          <button className='bg-green-500 px-2 py-1 rounded-sm text-gray-900 my-2'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
