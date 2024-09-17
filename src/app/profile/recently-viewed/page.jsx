"use client";
import { useCart } from "@/app/context/cartContext";
import ProductCard from "@/components/ProductCard";
import React from "react";

const RecentlyViewedPage = () => {
  const { recentlyViewed } = useCart();
  console.log(recentlyViewed);
  return (
    <section className="py-10 px-4">
      {!recentlyViewed ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-medium">Recently Viewed</h1>
          <p className="text-gray-500">You have not viewed any product yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 ">
          <h1 className="text-2xl font-medium mb-4">Recently Viewed</h1>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            {recentlyViewed && recentlyViewed?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentlyViewedPage;
