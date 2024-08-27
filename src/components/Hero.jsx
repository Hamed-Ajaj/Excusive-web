"use"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categories } from "@/constants";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./CategoryCard";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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
      <section className="flex flex-col gap-10 border-b-2 py-20">
        <SectionHeader
          title={"Categories"}
          sectionTitle={"Browse By Category"}
          arrows
        />
        <div className="grid grid-cols-6 gap-6">
                {categories.map((category) => (            
                    <CategoryCard category={category} key={category.id} />
                ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
