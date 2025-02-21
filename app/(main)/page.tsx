import Categories from '@/components/Categories'
import PopularProducts from '@/components/PopularProducts'
import { products } from '@/Constant'
import Image from 'next/image'
import React from 'react'
import demoban1 from '../../public/images/demoban1.jpeg'
import Hero from '@/components/Hero'
const HomePage = () => {
  return (
    <div className='w-full'>
      <Hero />
      <PopularProducts />
      <Categories />
      
    </div>
  )
}

export default HomePage
