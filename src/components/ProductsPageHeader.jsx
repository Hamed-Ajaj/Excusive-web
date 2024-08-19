"use client";
import { productsCategories } from "@/constants";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
const ProductsPageHeader = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [search, setSearch] = useState("");
  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsCategoryOpen(false);
  };
  return (
    <header className="py-5 md:py-10 sm:px-5 lg:bg-[#ECEFF1] w-full flex justify-center items-center">
      <nav className="w-[1200px] py-4 flex gap-5 items-center justify-center">
        <div className="w-full md:w-[80%] flex relative px-10">
          <div className="flex items-center justify-start bg-[#ECEFF1] py-2 px-2 md:px-8 lg:bg-white">
            {currentCategory}
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${
                  isCategoryOpen ? "rotate-180" : ""
                } duration-100`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div>
              <div
                className={`absolute top-14 left-10 w-auto bg-white z-10 ${
                  isCategoryOpen ? "block" : "hidden"
                }`}
              >
                <ul className="py-2 px-3">
                  {productsCategories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleCategoryChange(category.title)}
                      className="py-2 cursor-pointer hover:bg-[#ECEFF1]"
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <input
              type="text"
              className="w-full bg-[#ECEFF1] py-3 px-3 lg:bg-white  border-l-[1px] border-black border- outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search-products"
              id="search-products"
            />
            {
              search.length>0 &&(
                <p 
                onClick={() => setSearch("")}
                className="absolute top-[2px] cursor-pointer text-[25px] font-medium right-5"
                >x</p>
              )
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ProductsPageHeader;
