"use client"
import { useAddresses } from '@/app/context/addressesContext';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react'
import { useForm } from 'react-hook-form';

const AddAddress = () => {
    const {addAddress} = useAddresses()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

        const onSubmit = async (data) => {
            console.log(data)
            try {
                await addAddress({data,id:String(Date.now())})
                reset()
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <div className='flex flex-col gap-10 w-full'>
        <h1>Add Address</h1>
        <form className='flex flex-col gap-5 w-[70%]' 
            onSubmit={handleSubmit(onSubmit)}
        >
            <input type="text" placeholder="First Name" 
                className='w-full border-2 border-gray-200 p-2 rounded-md'
                id='fname'
                {...register('fname',{required:true,maxLength:30})}
             />
            <input type="text" placeholder="Last Name" className='w-full border-2 border-gray-200 p-2 rounded-md'
                id='lname'
                {...register('lname',{required:true,maxLength:30})}
            />
            <input type="text" placeholder="Address" className='w-full border-2 border-gray-200 p-2 rounded-md'
                id='address'
                {...register('address',{required:true,maxLength:30})}
            />
            <input type="text" placeholder="Phone Number" className='w-full border-2 border-gray-200 p-2 rounded-md'
                id='phoneNumber'
                {...register('phoneNumber',{required:true,maxLength:30})}
            />
            <button type="submit">Add Address</button>
        </form>
    </div>
  )
}

export default AddAddress