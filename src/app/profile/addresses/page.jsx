"use client"
import { useAddresses } from '@/app/context/addressesContext'
import Link from 'next/link'
import React from 'react'

const AddressesPage = () => {
  const {addresses,deleteAddress} = useAddresses()
  console.log(addresses)
  return (
    <section className='py-10 min-h-[80vh] flex flex-col gap-10 px-5'>
      <Link href="/profile/addresses/add">
        <button
          className="bg-[#db4444] text-white px-4 py-2 rounded-md"
        >Add New Address</button>
      </Link>
      <div className='flex flex-col gap-5 w-[80%]'>
        {addresses && addresses?.map(address => (
          <div
            key={address.id}
            className='bg-white p-5 rounded-md shadow-md flex flex-col gap-2'
          >
            <h3 className='text-lg font-bold'>{address.firstName} {address.lastName}</h3>
            <p>{address.address}</p>
            <p>{address.phoneNumber}</p>
            <div className='flex gap-2'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Edit</button>
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