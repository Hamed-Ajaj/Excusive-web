import { Eye, Heart, Star, StarHalfIcon, StarIcon, StarOff } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '@/app/global-redux/Features/cart/cartSlice'
import Link from 'next/link'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-center gap-4 w-[270px] h-auto  relative rounded-md'>
      <div className='bg-[#F5F5F5] px-6 py-16 w-full flex justify-center items-center relative group rounded-md'>
        <img src={product?.img||"/products/product1.svg"} alt="jacket" />
        <button className='w-full h-[50px] hidden group-hover:block hover:bg-[#373737] text-white bg-black absolute bottom-0 right-0 rounded-b-md'
        onClick={() => dispatch(addItem(product))}
        >Add To Cart</button>
        {product?.isNew && (
          <div className='py-1 px-3 bg-[#00FF66] rounded-md font-light text-white text-[12px] absolute top-3 left-3'>New</div>
        )}
      </div>
      <div className='w-full space-y-3'>
        <h4 className='font-medium'>{product?.title||"The north coat"} </h4>
        <div className='flex flex-col gap-3'>
          <p className='space-x-4'><span className='font-medium text-[#DB4444]'>{260||product?.discount}$</span><span className='font-medium text-[#7D8184] line-through'>{300||product?.price}$</span>
          </p>
          <div className='flex gap-1 w-full'>
            <img src="/icons/star.png" alt="star review" width={15} height={15}/>
            <img src="/icons/star.png" alt="star review" width={15} height={15}/>
            <img src="/icons/star.png" alt="star review" width={15} height={15}/>
            <img src="/icons/star.png" alt="star review" width={15} height={15}/>
            <img src="/icons/halfStar.png" alt="halfStar review" width={15} height={15}/>
          </div>
          <div className='text-gray-500 text-[0.8rem] font-semibold'>({product?.reviews})</div>
        </div>
      </div>
      <div className='flex flex-col gap-2 absolute top-5 right-5'>
        {/* <div className=' flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Heart size={20} className='bg-white rounded-full'/>
        </div> */}
        <Link href={`/products/${product?.id}`}>
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Eye size={20} className='bg-white rounded-full '/>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard