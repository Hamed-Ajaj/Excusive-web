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
    <section className='min-h-screen py-20 px-4 md:px-10 flex justify-center items-center'>
        <div className='grid grid-cols-5 gap-6'>
              {data?.data?.products?.map((product) => (
                  <ProductCard {...product} key={product.id}/>
              ))}
        </div>
    </section>
  )
}

export default CategoryItems