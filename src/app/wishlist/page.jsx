import Link from 'next/link'
import React from 'react'

const WishlistPage = () => {
  return (
    <div 
      className='flex flex-col items-center gap-4 justify-center h-[80vh]'
    >
      <h1
        className='text-4xl font-bold'
      >
        Coming Soon Inshalah... 
      </h1>
      <p
        className='text-lg font-medium'
      >
        We are working on it.
      </p>
      <Link href='/' as={"/"}>
      <button
        className='bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:border border border-black hover:text-black'
      >
        Go Back Home.
      </button>
      </Link>
    </div>  
  )
}

export default WishlistPage