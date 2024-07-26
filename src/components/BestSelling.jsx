import React from 'react'
import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'

const BestSelling = () => {
  return (
    <div className='flex flex-col gap-10 py-20 h-auto px-4 md:px-20 mb-20'>
      <div>
        <SectionHeader title={"This Month"} sectionTitle={"Best Selling Product"} button={"View all"} />
        
      </div>
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4 gap-10 '>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default BestSelling
