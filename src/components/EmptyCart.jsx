import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-10 items-center py-10 justify-center min-h-[80vh]">
        <div className='p-20 flex justify-center items-center bg-slate-200 rounded-full'>
            <FaShoppingCart size={200} />
        </div>
        <div className='flex flex-col items-center gap-3'>
            <h1 className="text-[2.0rem] font-medium">Your Cart is Empty</h1>
            <p className='text-[18px] text-[#5d6070] text-center text-wrap'> 
                Looks like you haven't added anything to your cart yet
            </p>
            <Link href={"/"}><button className="bg-[#db4444] text-white font-medium rounded-md py-4 px-12 mt-4">Return To Shop</button></Link>
        </div>
    </div>
  )
}

export default EmptyCart