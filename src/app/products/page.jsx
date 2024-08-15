"use client";
import FilterComponent from "@/components/FilterComponent";
import ProductCard from "@/components/ProductCard";
import ProductsPageHeader from "@/components/ProductsPageHeader";
import { products, sorting } from "@/constants";
import { SortDescIcon } from "lucide-react";
import React, { useState } from "react";

const ProductsPage = () => {
  const [sortingIsOpen, setSortingIsOpen] = useState(false);

  return (
    <section className="min-h-[100vh] mb-10 h-auto">
      <div className="flex flex-col w-full gap-10">
        <div className="w-full flex justify-center items-center">
          <ProductsPageHeader />
        </div>
        <div className="flex gap-10 h-full items-start px-2 sm:px-10 md:px-[120px] lg:px-4 ">
          <aside className="hidden w-[250px] min-h-screen md:flex  ">
            <FilterComponent />
          </aside>
          <div className="flex flex-col gap-10 w-full px-5 py-4">
            <div className="flex justify-between items-center w-full relative">
              <div className="uppercase text-[25px]">{`"Running Shoes" (28 results)`}</div>
              <button className="flex gap-2 bg-[#ECEFF1] py-2 px-4 rounded-md relative" 
              onClick={() => setSortingIsOpen(!sortingIsOpen)}
              >
                <SortDescIcon /> Sort by
              </button>
              <div className="absolute top-12 right-0 z-10">
                {sortingIsOpen && (
                  <div className="bg-white flex flex-col border border-black rounded-sm shadow-md ">
                    {
                      sorting.map((sort,index) => (
                        <div key={index} className="flex duration-100  gap-2 p-3 items-center cursor-pointer hover:bg-slate-300 w-full">
                          <div className="">
                            <p>{sort}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-5 ">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
