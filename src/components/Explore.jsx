import React from 'react'
import SectionHeader from './SectionHeader'
import { exploreProducts } from '@/constants'
import ProductCard from './ProductCard'
import Link from 'next/link'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const Explore = () => {
  const { data, isLoading,isFetching, isError,refetch } = useQuery({
    queryKey: ['explore-products'],
    // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
    queryFn: () => axios.get(`https://dummyjson.com/products?limit=8&skip=30&sortBy=price&order=desc`), 
  }
  )
  return (
    <section className='h-auto py-20 px-4 md:px-20'>
        <SectionHeader title={"Our Products"} sectionTitle={"Explore Our Products"}/>
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-12 h-auto '>
            {
                data?.data?.products?.map((product) =>(
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </div>
        <div className='w-full h-auto flex justify-center items-center'>
        <Link href="/products">
          <button className='px-10 py-3 bg-[#DB4444] text-white font-medium rounded-md mt-16'>View all Products</button>
        </Link>
        </div>
    </section>
  )
}

export default Explore