import { Eye, Heart, Star, StarHalfIcon, StarIcon, StarOff } from 'lucide-react'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col gap-4 w-[270px] h-auto  relative'>
      <div className='bg-[#F5F5F5] px-6 py-16 w-full flex justify-center items-center'>
        <img src={"/products/product1.svg" ||product?.img} alt="jacket" />
      </div>
      <div className='w-full space-y-3'>
        <h4 className='font-medium'>{"The north coat"|| product?.title} </h4>
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
          <div>({product?.reviews})</div>
        </div>
      </div>
      <div className='flex flex-col gap-2 absolute top-5 right-5'>
        <div className=' flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Heart size={20} className='bg-white rounded-full'/>
        </div>
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer'>
          <Eye size={20} className='bg-white rounded-full '/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard