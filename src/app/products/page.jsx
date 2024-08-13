"use client"
import FilterComponent from '@/components/FilterComponent'
import ProductCard from '@/components/ProductCard'
import ProductsPageHeader from '@/components/ProductsPageHeader'
import { SortDescIcon } from 'lucide-react'
import React from 'react'

const ProductsPage = () => {
  return (
    <section className='min-h-[100vh]'>
        <div className='flex flex-col w-full gap-10'>
          <div className='w-full flex justify-center items-center'>
            <ProductsPageHeader />
          </div>
          <div className='flex gap-10 h-full items-start px-2 sm:px-10 md:px-[120px] lg:px-4 '>
            <aside className='hidden w-[250px] min-h-screen md:flex  '>
              <FilterComponent/>
            </aside>
            <div className='w-full px-5 py-4'>
              <div className='flex justify-between items-center w-full'>
                <div className='uppercase text-[25px]'>{`"computers" (28 results)`}</div>
                <button className='flex gap-2 bg-[#ECEFF1] py-2 px-4 rounded-md'><SortDescIcon /> Sort by</button>
              </div>
              <div className='grid grid-cols-4 gap-5 p-4'>
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductsPage
