
import React from 'react'
import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const BestSelling = () => {
  const { data, isLoading,isFetching, isError,refetch } = useQuery({
    queryKey: ['best-sellings'],
    // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
    queryFn: () => axios.get(`https://dummyjson.com/products?limit=4&skip=50`), 
  }
  )
  console.log(data)
  if(isLoading) return <p>products...</p>
  if(isError) return <p>Error...</p>
 
  return (
    <div className='flex flex-col gap-10 py-20 h-auto px-4 md:px-20 mb-20'>
      <div>
        <SectionHeader title={"This Month"} sectionTitle={"Best Selling Product"} button={"View all"} />        
      </div>
      <div className='grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-4 gap-5 '>
          {data.data.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  )
}

export default BestSelling
