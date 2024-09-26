"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";

const RelatedItems = ({ keyword }) => {
  // i have to fetch items that belong to this keyword (using tanstack query)
  const { data, isFetching } = useQuery({
    queryKey: [`related-product-${keyword}`],
    queryFn: () =>
      axios.get(
        `https://dummyjson.com/products/category/${keyword}/?limit=4&skip=10`
      ),
    onSuccess: (data) => {
      // invalidate the query
      queryClient.invalidateQueries(`related-product-${keyword}`);
    },
  });

  return (
    <section>
      <h1>Related Items</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {data?.data?.products?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedItems;
