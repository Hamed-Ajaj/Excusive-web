"use client"
import { useCart } from '@/app/context/cartContext';
import React from 'react'
import { useForm } from 'react-hook-form';

const EditAddress = ({params}) => {
    const { getAddressById,editAddress } = useCart();
    const {editId} = params
    const values = getAddressById(editId);
    console.log(values)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        defaultValues: {
          fname: values.firstName,
          lname: values.lastName,
          address: values.address,
          phoneNumber:values.phoneNumber
      }});

      const onSubmit = async (data) => {
        try {
          await editAddress(values.id,data);
          reset();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className="flex flex-col gap-10 py-10 px-4 w-full">
    <h1
      className="text-[#333333] text-2xl md:text-4xl font-bold"
    >Edit Address </h1>
    <form
      className="flex flex-col gap-5 w-full md:w-[70%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="First Name"
        className="w-full border-2 border-gray-200 px-2 py-4 rounded-md"
        id="fname"
        {...register("fname", { required: true, maxLength: 30 })}
      />
      {errors.fname && (
        <InputsError error={errors?.fname} errorName={"First Name"} />
      )}

      <input
        type="text"
        placeholder="Last Name"
        className="w-full border-2 border-gray-200 px-2 py-4  rounded-md"
        id="lname"
        {...register("lname", { required: true, maxLength: 30 })}
      />
      {errors.lname && (
        <InputsError error={errors?.lname} errorName={"Last Name"} />
      )}

      <input
        type="text"
        placeholder="eg. apartment 4, building name, street name"
        className="w-full border-2 border-gray-200 px-2 py-4  rounded-md"
        id="address"
        {...register("address", { required: true, maxLength: 60 })}
      />
      {errors.address && (
        <InputsError error={errors?.address} errorName={"Address"} />
      )}

      <input
        type="text"
        placeholder="eg . 12345678"
        className="w-full border-2 border-gray-200 px-2 py-4  rounded-md"
        id="phoneNumber"
        {...register("phoneNumber", { required: true, maxLength: 8 })}
      />
      {errors.phoneNumber && (
        <InputsError error={errors?.phoneNumber} errorName={"Phone Number"} />
      )}
      <button
        type="submit"
        className="bg-[#db4444] text-white px-4 py-4 md:font-medium md:text-[18px] rounded-md"
      >
        Save Changes
      </button>
    </form>
  </div>
  )
}

export default EditAddress