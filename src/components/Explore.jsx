import React from 'react'
import SectionHeader from './SectionHeader'
import { exploreProducts } from '@/constants'
import ProductCard from './ProductCard'
const Explore = () => {
  return (
    <section className='h-auto py-20 px-4 md:px-20'>
        <SectionHeader title={"Our Products"} sectionTitle={"Explore Our Products"}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-12 h-auto '>
            {
                exploreProducts.map((product) =>(
                    <ProductCard product={product} />
                ))
            }
        </div>
    </section>
  )
}

export default Explore