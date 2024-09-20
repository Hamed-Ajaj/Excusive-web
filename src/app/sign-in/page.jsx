"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { login } from '../firebase/auth';
// import { auth, db } from '../firebase/firebase';
// import { useAuth } from '../context/authContext';
import { useToast } from '@chakra-ui/react';

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors },reset, } = useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toast = useToast()
    const onSubmit = async data => {
        try {
            setLoading(true)
            await login(data.email,data.password)
            toast({
                title:"Logged in",
                description:`Welcome back.`,
                status:"success",
                duration:3000,
                isClosable:true
            })
            router.push('/')
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(error)
            setLoading(false)
        }
    };
    // if(auth.currentUser) router.push("/")
  return (
    <section className='flex justify-center items-center p-10 gap-10'>
            <div className='hidden md:block w-[45%] h-[750px] '>
                <img src='/signup.svg' alt='sign-up' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col justify-center items-center w-[45%] gap-8'>
            
            <form onSubmit={handleSubmit(onSubmit)} className='min-w-[350px] max-w-[450px] flex flex-col gap-12 p-4  items-start'>
                <div className='space-y-[24px] text-start '>
                    <h1 className='text-[28px] sm:text-[2.3rem] font-medium'>Log in to Exclusive</h1>
                    <p>Enter your details below</p>
                </div>
                <div className='flexCol w-full'>
                    {/* <label htmlFor="email">Email or Phone Number</label> */}
                    <input placeholder='Email or Phone Number' className='py-2 outline-none border-b-2 border-black w-full' id="email" type='email' {...register('email', { required: true, maxLength: 30 })} />
                </div>
                <div className='flexCol w-full'>
                    {/* <label htmlFor="password">Password</label> */}
                    <input placeholder='Password' id="password" className='py-2 outline-none border-b-2 border-black w-full' type='password' {...register('password', { required: true,minLength:6, maxLength: 30 })} />
                    {error && <p className='text-red-500'>Invalid Email or Password</p>}
                </div>

                {/* {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> } */}
                <div className='flex justify-between items-center gap-12 w-full'>
                    <button  className='bg-[#DB4444] px-[10px] py-[16px] w-1/2 hover:bg-[#F43F5E]  text-white font-medium rounded-md'>{loading?"Logging In...":"Login"}</button>
                    <button onClick={()=>router.push("/forgot-password")} className='bg-transparent text-[#DB4444] w-1/2 hover:text-[#F43F5E]'>Forgot Password?</button>
                </div>
                <p className='text-center'>Don't Have an Account? <Link href="/sign-up" className='text-blue-500 underline'>Sign Up</Link></p>
            </form>
        </div>
    </section>
  )
}

export default SignUpPage
