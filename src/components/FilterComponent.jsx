"use client"
import { colors, sizes } from "@/constants";
import { FilterIcon } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
const FilterComponent = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);

  const handleChangeColor = (color) => {
    setActiveColor(color);
  }

  const handleChangeSize = (size) => {
    setActiveSize(size);
  };
  return (
    <nav className="px-3 w-full min-h-full border-r">
      <h5 className=" flex items-center text-[24px] gap-4 pb-4 border-b">
        <FilterIcon size={22} /> Filters
      </h5>
      <hr className="w-full" />
      <div className="flex flex-col py-4 w-full gap-5 ">
        <div className="w-full flex items-center justify-between">
          <p>Applied Filters</p>
          <p className="font-medium text-[13px] underline cursor-pointer">
            Clear All
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">
            Filter1{" "}
            <span className="cursor-pointer text-red-500">
              <X size={12} />
            </span>
          </div>
          <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">
            Filter2{" "}
            <span className="cursor-pointer text-red-500">
              <X size={12} />
            </span>
          </div>
          <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">
            Filter3{" "}
            <span className="cursor-pointer text-red-500">
              <X size={12} />
            </span>
          </div>
        </div>
        <hr className="w-full" />
      </div>
      <div className="py-2 border-b">
        <div className="flex items-center justify-between">
          <p>Category</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4  duration-100 cursor-pointer`}
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
        </div>
        <div>
          <ul className="py-2  space-y-1 accent-black">
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="category1"
                id="category1"
                className="h-4 w-4"
              />
              <label htmlFor="category1">Category1</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="checkbox"
                name="category2"
                id="category2"
                className="h-4 w-4"
              />
              <label htmlFor="category2">Category2</label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="category3"
                id="category3"
                className="h-4 w-4"
              />
              <label htmlFor="category3">Category3</label>
            </div>
          </ul>
        </div>
      </div>
      <div className="py-2 border-b">
        <div className="flex items-center justify-between">
          <p>Status</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4  duration-100 cursor-pointer`}
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
        </div>
        <div>
          <ul className="py-2  space-y-1 accent-black">
            {/* create two radio button in stock and out of stock */}
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="status"
                id="inStock"
                className="h-4 w-4"
              />
              <label htmlFor="inStock">In Stock</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="radio"
                name="status"
                id="outOfStock"
                className="h-4 w-4"
              />
              <label htmlFor="outOfStock">Out of Stock</label>
            </div>
          </ul>
        </div>
      </div>
      <div className="py-4 space-y-5 border-b">
        <div className="flex items-center justify-between">
          <p>Size</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4  duration-100 cursor-pointer`}
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
        </div>
        <div className="flex flex-wrap gap-3 items-center">
              {sizes.map((size) => (
                <div
                  key={size.id}
                  onClick={() => handleChangeSize(size.size)}
                  className={`w-[35px] p-2 h-[35px] cursor-pointer ${
                    activeSize === size.size
                      ? "bg-[#db4444] border-none text-white"
                      : "text-black"
                  }  text-[14px] font-medium flex justify-center items-center border border-black rounded-[5px]`}
                >
                  {size.size}
                </div>
              ))}
            </div>
      </div>
      <div className="py-5 border-b space-y-4">
        <div className="flex items-center justify-between">
          <p>Color</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4  duration-100 cursor-pointer`}
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
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          {colors.map((color) => (
            <div
              key={color.id}
              onClick={() => handleChangeColor(color.color)}
              className={`w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-[#${color.color}] rounded-full`}
            >
              <div className="w-full flex justify-center items-center">
                <img src="/icons/selected.svg" alt="selected"  className={` ${activeColor=== color.color?"block":"hidden"} w-[60%] object-cover`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FilterComponent;
