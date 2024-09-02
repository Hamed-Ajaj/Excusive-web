"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";

const CategoryItems = ({ params }) => {
  const { categoryName } = params;

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [`categories-${categoryName}`],
    // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
    queryFn: () =>
      axios.get(
        `https://dummyjson.com/products/category/${categoryName.toLowerCase()}?limit=0`
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [`categories-${categoryName}`],
      });
    },
  });

  useEffect(() => {
    refetch();
  }, [categoryName]);
  return (
    <section className="min-h-screen   flex flex-col gap-5 py-10 px-4 md:px-10   items-center w-full">
      <div className="w-full h-[100px]">
        <h1 className="text-center mb-10 text-[30px] font-semibold italic ">
          "{categoryName}"{" "}
          <span className=" ml-5 text-[16px] font-medium">
            {data?.data?.products?.length} results
          </span>
        </h1>
      </div>

      {isFetching ? (
        "...loading"
      ) : (
        <div className="flex flex-wrap justify-center gap-4  items-start overflow-hidden">
          {data?.data?.products?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryItems;
