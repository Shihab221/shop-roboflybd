"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "../../../Constant";

const ProductDetailsContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id"); // Get the 'id' from query parameters

  if (!id || isNaN(parseInt(id, 10))) {
    return <p>Invalid product ID</p>; // Handle invalid or missing IDs
  }

  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full p-4">
      <div className="space-x-4 flex flex-row justify-between">
        <div className="bg-gray-800 flex sm:flex-row flex-col rounded-lg w-full">
          <img
            src={product.image}
            alt={product.title}
            width={512}
            height={512}
            className="rounded-md my-4 mx-4 object-contain max-w-sm"
          />
          <div className="px-6 py-6">
            <h2 className="text-2xl font-bold text-gray-300">{product.title}</h2>
            <p className="text-lg">Price: {product.discounted_price} Tk</p>
            <p className="text-gray-400 mt-2 max-w-xl">{product.description}</p>
            <p className="text-gray-300 mt-4">
              Status: <span className="text-green-500 bg-gray-800 rounded-full px-2">In Stock</span>
            </p>
            <button className="bg-green-500 px-2 py-1 rounded-sm text-gray-900 my-2">Add to Cart</button>
          </div>
        </div>

        <div className="bg-gray-800 p-4 w-full max-w-sm rounded-lg">
          <h4>Delivery Details:</h4>
        </div>
      </div>

      <div className="bg-gray-800 p-4 my-4 rounded-lg">
        <p>Description:</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <Suspense fallback={<p>Loading product details...</p>}>
      <ProductDetailsContent />
    </Suspense>
  );
};

export default ProductDetails;
