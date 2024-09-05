import React, { Suspense } from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductsGroupLoader from "@/loaders/ProductsGrouploader";

const BestSelling = () => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["best-selling"],
    // https://dummyjson.com/products?sortBy=price&order=desc&/search?q=food
    queryFn: () => axios.get(`https://dummyjson.com/products?limit=4&skip=50`),
  });

  return (
    <div className="flex flex-col gap-10 py-20 h-auto px-4 md:px-20 mb-20">
      <div>
        <SectionHeader
          title={"This Month"}
          sectionTitle={"Best Selling Product"}
          button={"View all"}
        />
      </div>
      <Suspense fallback={<ProductsGroupLoader />}>
        {isFetching ? (
          <ProductsGroupLoader />
        ) : (
          <div className="grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-4 gap-5 ">
            {data.data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default BestSelling;
