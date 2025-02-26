
import { products } from '@/Constant'
import Image from 'next/image'
const page = () => {
  return (
    <div className='items-center min-h-screen w-full'>
      <p className='text-2xl text-gray-300 py-2'>Welcome to cart</p>
      <div className='flex flex-col max-w-3xl'>
        {products.map((product,index)=>(
          <div key={index} className='flex flex-row justify-between bg-gray-800 rounded-md my-2 px-8 items-center'>
            <Image 
            src={product.image}
            alt='cart_product_image'
            width={100}
            height={100}
            className='py-2 object-cover'
            />
            <p>{product.title}</p>
            <p>{product.regular_price}</p>
            <div className='flex flex-row space-x-2'>
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <p>{}</p>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
