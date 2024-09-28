"use client"
import { useCart } from '@/app/context/cartContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AddressesPage = () => {
  const {addresses,deleteAddress,getAddresses} = useCart()
  return (
    <section className='py-10 min-h-[80vh] flex flex-col gap-10 px-5'>
      <Link href="/profile/addresses/add">
        <button
          className="bg-[#db4444] text-white px-4 py-2 rounded-md"
        >Add New Address</button>
      </Link>
      <div className='flex flex-col gap-5 w-full md:w-[80%]'>
        {addresses && addresses?.map(address => (
          <div
            key={address.id}
            className='bg-white p-10 rounded-md shadow-md flex flex-col gap-4'
          >
            <div className='flex gap-4'> 
              <label>First Name : </label>
              <h3 className='text-lg font-bold'>{address.firstName}</h3>
            </div>
            <div className='flex gap-4'> 
              <label>Last Name : </label>
              <h3 className='text-lg font-bold'>{address.lastName}</h3>
            </div>
            <div className='flex gap-4'>
              <label>Address : </label>
              <p>{address.address}</p>
            </div>
            <div className='flex gap-4'>
              <label>Phone Number : </label>
              <p>+961 {address.phoneNumber}</p>
            </div>
            <div className='flex gap-2'>
            <Link href={`/profile/addresses/edit/${address.id}`}>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                Edit
              </button>
            </Link>  
              <button className='bg-red-500 text-white px-4 py-2 rounded-md'
                onClick={() => deleteAddress(address.id)}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AddressesPage