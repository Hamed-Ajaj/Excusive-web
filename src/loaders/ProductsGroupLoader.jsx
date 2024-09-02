import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

const ProductsGroupLoader = () => {
  return (
    <section className='grid grid-cols-2  sm:flex sm:justify-start md:justify-center  sm:flex-wrap gap-4 sm:gap-10 md:gap-4'>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
    </section>
  )
}

export default ProductsGroupLoader