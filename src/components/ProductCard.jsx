import {
  Eye,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/cartContext";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductCard = ({ title,id,price,discountPercentage,rating,stock,tags,brand,availabilityStatus,thumbnail,images,reviews }) => {
  const {loading,addToCart,addRecentlyViewed} = useCart()
  let priceAfterDisc = price - (price * discountPercentage/100)
  const router = useRouter()
  const handleAddRecentlyViewed = () => {
    addRecentlyViewed({
      id:nanoid(),
      productId:id,
      title,
      thumbnail,
      price,
      discountPercentage,
      images,
      rating,
      stock,
      tags,
      brand,
      availabilityStatus,
      reviews
    });
    router.push(`/products/${id}`)
  }
  // const dispatch = useDispatch();
  const imageLoader = ({ src, width, quality }) => {
    console.log(src)
    return `${src}`;
  }
  return (
    <div className="flex flex-col items-center gap-4 w-[150px] sm:w-[200px]   md:w-[250px] lg:w-[270px]  h-auto  relative rounded-md">
      <div className="bg-[#F5F5F5] px-6 py-16 w-full flex justify-center items-center relative group rounded-md h-[220px]  sm:h-[280px]">
        <Image src={images[0]||thumbnail} loader={imageLoader}  className="object-contain bg-center max-h-[200px]" width={200} height={200} alt={title} />
        {/* <Image src={`${thumbnail}`} alt={title} width={200} height={200} /> */}
        <button
          className="w-full h-[50px] hidden group-hover:block hover:bg-[#373737] text-white bg-black absolute bottom-0 right-0 rounded-b-md"
          onClick={() => addToCart({id,title,priceAfterDisc,thumbnail,images,quantity:1})}
        >
          {loading ? "Adding to cart..." : "Add to Cart"}
        </button>
        {/* {product?.isNew && (
          <div className="py-1 px-3 bg-[#00FF66] rounded-md font-medium text-white text-[12px] absolute top-5 left-5">
            New
          </div>
        )} */}
        {discountPercentage > 15 && (
          <div className="py-1 px-3 bg-[#FF0000] rounded-md font-medium text-white  text-[12px] absolute top-5 left-5">
            Sale
          </div>
        )}
      </div>
      <div className="w-full space-y-3 h-[150px]">
        <h4 className="font-medium hover:underline" onClick={handleAddRecentlyViewed}>{ title } </h4>
        <div className="flex flex-col gap-3">
          <p className="space-x-4">
            <span className="text-[#FFA500] font-semibold">
              ${(priceAfterDisc).toFixed(1) }
            </span>
            <span className="text-gray-500 line-through">
              ${ price }
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
                  stock>0 ? "text-green-500" : "text-[#FF0000]"
                }`}
              >
                {stock>0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
          <div className="text-gray-500 text-[0.8rem] font-semibold">
            ({reviews?.length}) reviews.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 absolute top-5 right-5">
        {/* <div className=' flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Heart size={20} className='bg-white rounded-full'/>
        </div> */}
        {/* <Link href={`/products/${id}`}> */}
          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer"
          onClick={handleAddRecentlyViewed}
          >
            <Eye size={20} className="bg-white rounded-full " />
          </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
