"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import ProductDetailsSkeleton from "@/loaders/ProductDetailsSkeleton";
import ReviewsSection from "@/components/ReviewsSection";
import RelatedItems from "../../../components/RelatedItems";
import Image from "next/image";
import Link from "next/link";
const ProductDetails = ({ params }) => {
  const { id } = params;
  const [quantity, setQuantity] = useState(1);
  const { data: fetchedProduct, isFetching } = useQuery({
    queryKey: [`fetched-product-${id}`],
    queryFn: () => axios.get(`https://dummyjson.com/products/${id}`),
    onSuccess: (data) => {
      // invalidate the query
      queryClient.invalidateQueries(`fetched-product-${id}`);
    },
  });

  // console.log(fetchedProduct?.data)

  const updateQuantity = (operation) => {
    if (operation === "+" && quantity < fetchedProduct?.data?.stock) {
      setQuantity(quantity + 1);
    }
    if (operation === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [activeImage, setActiveImage] = useState(
    fetchedProduct?.data?.images[0] || fetchedProduct?.data?.thumbnail
  );

  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <div className=" flex flex-col justify-center items-center py-12 md:py-20 sm:px-4 md:px-20 max-w-[1600px] min-h-screen">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        {isFetching ? (
          <ProductDetailsSkeleton />
        ) : (
          <div className="flex flex-col w-full max-w-[1200px] justify-center items-center lg:flex-row gap-[120px] p-10 lg:max-h-[800px]  ">
            <div className="w-full flex flex-col gap-5 lg:w-[45%] ">
              <div className="bg-[#f5f5f5] lg:max-h-[700px] p-16">
                <Image
                  loader={imageLoader}
                  src={activeImage || fetchedProduct?.data?.images[0]}
                  className="w-full max-h-[400px] object-contain"
                  alt={fetchedProduct?.data?.title}
                  width={500}
                  height={400}
                  quality={30}
                  onLoad={(e) => console.log(e)}
                />
              </div>
              <div className="cursor-pointer flex flex-wrap gap-5 w-full">
                {fetchedProduct?.data?.images?.map((image) => (
                  <Image
                    key={image}
                    loader={imageLoader}
                    src={image}
                    className="aspect-square bg-[#f5f5f5]  object-contain"
                    width={100}
                    height={100}
                    quality={30}
                    // onLoad={(e) => console.log(e)}
                    alt={fetchedProduct?.data?.title}
                    onClick={() => setActiveImage(image)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-[40%]">
              <div className="flex flex-col gap-4">
                <h1 className="text-[20px] sm:text-[24px] font-semibold">
                  {fetchedProduct?.data?.title}
                </h1>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <p>rating:</p>
                    {fetchedProduct?.data?.rating}
                  </div>
                  <p>
                    <span
                      className={`${
                        fetchedProduct?.data?.stock > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {fetchedProduct?.data?.stock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </p>
                </div>
                <p className="text-[20px] sm:text-[24px]">
                  {fetchedProduct?.data?.price}$
                </p>
                <p className="text-[14px] w-full lg:max-w-[357px]">
                  {fetchedProduct?.data?.description}
                </p>
                <p className="tet-[20px] font-bold">
                  {fetchedProduct?.data?.warrantyInformation}
                </p>
              </div>
              <hr />
              <div className="flex gap-5 items-center">
                {/* <div className="flex gap-5 items-center">
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
                </div> */}
              </div>
              {/* <div className="flex gap-5 items-center">
                <h1 className="text-[20px] sm:font-medium">Sizes:</h1>
                <div className="flex gap-3 items-center">
                  {sizes.map((size) => (
                    <div
                      key={size.id}
                      onClick={() => handleChangeSize(size.size)}
                      className={`w-[35px] p-2 h-[35px] cursor-pointer ${
                        activeSize === size.size
                          ? "bg-[#db4444] border-[#db4444] text-white"
                          : "text-black"
                      } text-[14px] font-medium flex justify-center items-center border border-black rounded-[5px]`}
                    >
                      {size.size}
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="flex flex-col sm:flex-row  justify-between gap-5 items-start sm:items-center h-auto">
                <div className="flex  h-[50px] border border-black items-center rounded-md">
                  <button
                    onClick={() => updateQuantity("-")}
                    className="w-[50px] h-[50px] flex justify-center items-center hover:bg-[#db4444] active:bg-[#f04c4c] hover:text-white active:text-white border-r border-r-black rounded-l-md"
                  >
                    -
                  </button>
                  <p className="text-[20px] font-medium px-6">{quantity}</p>
                  <button
                    onClick={() => updateQuantity("+")}
                    className="w-[50px] h-[50px] flex justify-center items-center hover:bg-[#db4444] active:bg-[#f04c4c] hover:text-white active:text-white border-l border-l-black rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <div>
                <Link href={`/checkout`}
                  as={`/checkout`}
                >
                  <button className="px-12 py-3  bg-[#db4444] font-medium rounded-md text-white hover:opacity-90 active:opacity-80">
                    Buy Now
                  </button>
                </Link>
                </div>
              </div>
              {/* <div>
                <ReviewsSection reviews={fetchedProduct?.data?.reviews} />
              </div> */}
              <div className="flex flex-col h-auto">
                <div className="w-full border-2 border-black p-4 flex items-center gap-5 rounded-t-md">
                  <div>
                    <img src="/icons/delivery.svg" className="invert" alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Free Delivery</h4>
                    <p className="text-[0.75rem] font-medium">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="w-full border-2 border-black border-t-0 p-4 flex gap-5 items-center rounded-b-md">
                  <div>
                    <img src="/icons/return.svg" className="" alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-medium">Return Delivery</h4>
                    <p className="text-[0.65rem] sm:text-[0.75rem] font-medium ">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Suspense>
      {/* <Suspense fallback={<p>...loading</p>}>
        <div className="w-full flex justify-center items-center">
          <RelatedItems keyword={fetchedProduct?.data?.category}/>
        </div>
      </Suspense> */}
    </div>
  );
};

export default ProductDetails;
