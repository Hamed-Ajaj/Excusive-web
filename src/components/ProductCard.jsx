import {
  Eye,
  Heart,
  Star,
  StarHalfIcon,
  StarIcon,
  StarOff,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/global-redux/Features/cart/cartSlice";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center gap-4 w-[170px] sm:w-[200px]  md:w-[250px] lg:w-[270px] h-auto  relative rounded-md">
      <div className="bg-[#F5F5F5] px-6 py-16 w-full flex justify-center items-center relative group rounded-md">
        <img src={product?.img || "/products/product1.svg"} alt="jacket" />
        <button
          className="w-full h-[50px] hidden group-hover:block hover:bg-[#373737] text-white bg-black absolute bottom-0 right-0 rounded-b-md"
          onClick={() => dispatch(addItem(product))}
        >
          Add To Cart
        </button>
        {product?.isNew && (
          <div className="py-1 px-3 bg-[#00FF66] rounded-md font-medium text-white text-[12px] absolute top-5 left-5">
            New
          </div>
        )}
        {product?.isOnSale && (
          <div className="py-1 px-3 bg-[#FF0000] rounded-md font-medium text-white  text-[12px] absolute top-5 left-5">
            Sale
          </div>
        )}
      </div>
      <div className="w-full space-y-3">
        <h4 className="font-medium">{product?.title || "The north coat"} </h4>
        <div className="flex flex-col gap-3">
          <p className="space-x-4">
            <span className="text-[#FFA500] font-semibold">
              ${product?.price || "99.99"}
            </span>
            <span className="text-gray-500 line-through">
              {product?.oldPrice}
            </span>
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1 w-auto">
              <img
                src="/icons/star.png"
                alt="star review"
                width={15}
                height={15}
              />
              <img
                src="/icons/star.png"
                alt="star review"
                width={15}
                height={15}
              />
              <img
                src="/icons/star.png"
                alt="star review"
                width={15}
                height={15}
              />
              <img
                src="/icons/star.png"
                alt="star review"
                width={15}
                height={15}
              />
              <img
                src="/icons/halfStar.png"
                alt="halfStar review"
                width={15}
                height={15}
              />
            </div>
            <div>
              <p
                className={`text-[14px] ${
                  product?.isInStock ? "text-green-500" : "text-[#FF0000]"
                }`}
              >
                {product?.isInStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-[0.8rem] font-semibold">
            ({product?.reviews}) reviews.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 absolute top-5 right-5">
        {/* <div className=' flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Heart size={20} className='bg-white rounded-full'/>
        </div> */}
        <Link href={`/products/${product?.id}`}>
          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer">
            <Eye size={20} className="bg-white rounded-full " />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
