"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "@/constants";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";
import { Suspense, useRef, useState } from "react";
import ProductsGroupLoader from "@/loaders/ProductsGrouploader";
const Hero = () => {
    let [scrollCard,setScrollCard]=useState(0);
    const containerRef = useRef();

    const handleScrollLeft=()=>{
        containerRef.current.scrollLeft -= 300;
    }

    const handleScrollRight=()=>{
        containerRef.current.scrollLeft += 300;
    }
  return (
    <section className="w-full py-20 px-4 md:p-20 mb-10 ">
      {/* Hero Section */}
      <div className="flex justify-between items-center p-8 md:p-20 bg-black min-h-[400px] rounded-lg mb-20">
        <div className="flex flex-col gap-10 p-4">
          <div className="flex gap-6 items-center">
            <img
              src="/icons/iphoneIcn.svg"
              alt="iphone icon"
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-white">iPhone 14 Series</h1>
          </div>
          <div>
            <h1 className="text-[48px] text-white font-semibold">
              Up to 10% <br /> off Voucher
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <h2 className="text-white underline underline-offset-1 font-medium">
              Shop Now!{" "}
            </h2>{" "}
            <img src="/icons/right.svg" alt="right" width={24} height={24} />
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="/iphone.svg" alt="hero" className="w-[470px] h-[350px]" />
        </div>
      </div>

      {/* Categories section */}
      <section className="flex flex-col max-w-[1500px] gap-10 border-b-2 py-20  ">
        <SectionHeader
          title={"Categories"}
          sectionTitle={"Browse By Category"}
          arrows
          handleScrollLeft={handleScrollLeft}
          handleScrollRight={handleScrollRight}
        />
        <div className="scrollingCategories flex overflow-x-scroll duration-150  gap-6" style={{scrollLeft:scrollCard}} ref={containerRef}>
          <Suspense fallback={<ProductsGroupLoader />}>
                {categories.map((category) => (            
                    <CategoryCard category={category} key={category.id} />
                ))}
          </Suspense>
        </div>
      </section>
    </section>
  );
};

export default Hero;
