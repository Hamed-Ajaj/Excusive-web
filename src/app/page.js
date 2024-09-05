"use client";
import BestSelling from "@/components/BestSelling";
import CTA from "@/components/CTA";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import Services from "@/components/Services";
import ProductsGroupLoader from "@/loaders/ProductsGroupLoader";
import { Suspense } from "react";

export default function Home() {
  return (
      <main className="w-full max-w-[1600px] m-auto min-h-screen relative">
        <Hero />
        <BestSelling />
        <CTA />
        <Explore />
        <NewArrival />
        <Services />
      </main>
  );
}
