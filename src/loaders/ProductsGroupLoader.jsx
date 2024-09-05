import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductsGroupLoader = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-wrap gap-6'>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
      </div>
    </section>
  )
}

export default ProductsGroupLoader