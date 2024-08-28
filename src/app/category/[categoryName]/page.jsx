"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from '@/components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const CategoryItems = ({params}) => {
    const {categoryName} = params
    
    const { data, isLoading,isFetching, isError,refetch } = useQuery({
        queryKey: ['products'],
        // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
        queryFn: () => axios.get(`https://dummyjson.com/products/category/${categoryName.toLowerCase()}?limit=0`), 
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
      }
      )

      console.log(data)
  return (
    <section className='min-h-screen  flex flex-col gap-5 py-20 px-4 md:px-10  justify-center items-center w-full'>
        <div className="w-full"><h1 className="text-start sm:text-center lg:text-start  mb-10 text-[30px] font-semibold italic ">"{categoryName}"  <span className=" ml-5 text-[16px] font-medium">{data?.data?.products?.length} results</span></h1></div>
        <div className='flex flex-wrap justify-center gap-4 sm:justify-center overflow-hidden'>
              {data?.data?.products?.map((product) => (
                  <ProductCard {...product} key={product.id}/>
              ))}
        </div>
    </section>
  )
}

export default CategoryItems