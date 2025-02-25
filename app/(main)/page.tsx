import Categories from '@/components/Categories'
import PopularProducts from '@/components/PopularProducts'
import React from 'react'
import Hero from '@/components/Hero'
const HomePage = () => {
  return (
    <div className='w-full'>
      <Hero />
      <PopularProducts />
      {/* <Categories /> */}
      
    </div>
  )
}

export default HomePage
