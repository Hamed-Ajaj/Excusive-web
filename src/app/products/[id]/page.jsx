"use client";
import { exploreProducts } from "@/constants";
import { useState } from "react";
import { sizes } from "@/constants";
const ProductDetails = ({ params }) => {
  const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);
  const { id } = params;
  const product = exploreProducts.find(
    (product) => product.id === parseInt(id)
  );
  const isInStock = true;
  const handleChangeColor = (color) => {
    setActiveColor(color);
  };

  const handleChangeSize = (size) => {
    setActiveSize(size);
  }
  return (
    <div className=" flex flex-col justify-center items-center py-12 md:py-20 sm:px-4 md:px-20 max-w-[1600px] min-h-screen">
      <div className="flex flex-col w-full max-w-[1200px] justify-center items-center lg:flex-row gap-[120px] p-10 lg:max-h-[800px]  ">
        <div className="w-full lg:w-[45%] bg-[#f5f5f5] max-h-[700px] p-16">
          <img
            src={product?.img}
            className="w-full h-full object-contain"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-[40%]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] sm:text-[24px] font-semibold">Havic HV G-92 Gamepad</h1>
            <div className="flex gap-2">
              <p>stars</p>
              <p>reviews</p>
              <p>
                |{" "}
                <span
                  className={`${isInStock ? "text-green-500" : "text-red-500"}`}
                >
                  In stock
                </span>
              </p>
            </div>
            <p className="text-[20px] sm:text-[24px]">{product.price}$</p>
            <p className="text-[14px] w-full lg:max-w-[357px]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <hr />
          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center">
              <p className="text-[20px] sm:font-medium">Colors:</p>
              <div className="flex gap-3">
                <div
                  className={`w-[20px] h-[20px] bg-red-500 rounded-full ${
                    activeColor === "red"
                      ? "border-4 border-spacing-4 border-black"
                      : ""
                  }`}
                  name="red"
                  onClick={() => handleChangeColor("red")}
                ></div>
                <div
                  className={`w-[20px] h-[20px] bg-blue-500 rounded-full ${
                    activeColor === "blue" ? "border-4 border-black" : ""
                  }`}
                  name="blue"
                  onClick={() => handleChangeColor("blue")}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
                <h1 className="text-[20px] sm:font-medium">Sizes:</h1>
                <div className="flex gap-3 items-center">
                    {sizes.map((size) => (
                        <div 
                        key={size.id}
                        onClick={() => handleChangeSize(size.size)} 
                        className={`w-[35px] p-2 h-[35px] cursor-pointer ${activeSize===size.size?"bg-[#db4444] border-[#db4444] text-white":"text-black"} text-[14px] font-medium flex justify-center items-center border border-black rounded-[5px]`}
                        >
                            {size.size}
                        </div>
                    ))}
                </div>
          </div>
          <div className="flex flex-col sm:flex-row  justify-between gap-5 items-start sm:items-center h-auto">
            <div className="flex  h-[50px] border border-black items-center rounded-md">
                <button className="w-[50px] h-[50px] flex justify-center items-center hover:bg-[#db4444] active:bg-[#f04c4c] hover:text-white active:text-white border-r border-r-black rounded-l-md">
                    -
                </button>
                <p className="text-[20px] font-medium px-6">1</p>
                <button className="w-[50px] h-[50px] flex justify-center items-center hover:bg-[#db4444] active:bg-[#f04c4c] hover:text-white active:text-white border-l border-l-black rounded-r-md">
                    +
                </button>
            </div>
            <div>
                <button className="px-12 py-3  bg-[#db4444] font-medium rounded-md text-white hover:opacity-90 active:opacity-80">Buy Now</button>
            </div>
          </div>
          <div className="flex flex-col h-auto">
            <div className="w-full border-2 border-black p-4 flex items-center gap-5 rounded-t-md">
                <div >
                    <img src="/icons/delivery.svg" className="invert" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Free Delivery</h4>
                    <p className="text-[0.75rem] font-medium">Enter your postal code for Delivery Availability</p>
                </div>
            </div>
            <div className="w-full border-2 border-black border-t-0 p-4 flex gap-5 items-center rounded-b-md">
                <div >
                    <img src="/icons/return.svg" className="" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Return Delivery</h4>
                    <p className="text-[0.65rem] sm:text-[0.75rem] font-medium ">Free 30 Days Delivery Returns. Details</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
