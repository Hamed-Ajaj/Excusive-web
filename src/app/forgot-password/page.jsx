'use client'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ForgotPassword = () => {
  const router = useRouter()
  const toast = useToast()
  const [email, setEmail] = useState('')
  const sendResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email)
      toast({
        title: 'Password Reset Email Sent',
        description: `A password
        reset email has been sent to ${email}`,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
      router.push('/sign-in')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <section className='min-h-[60vh]  py-20 px-10 flex flex-col gap-20 justify-center items-center'>
      <h1 className='text-[50px] font-medium'>Exclusive</h1>
    <div className='flex flex-col gap-8 items-start min-w-[300px] max-w-[700px]  py-10 ' >
    <p className='text-[20px] text-wrap max-w-[500px]'>Enter the email address associated with your account and we'll send you a link to reset your password .</p>
      <input 
      type="email" name="reset-email" onChange={
        (e) => setEmail(e.target.value)
      } 
      id="reset-email" 
      className='border-2 border-black w-full py-4 px-2 rounded-md outline-none'
      placeholder='enter your email' value={email} />
      <button 
      onClick={sendResetEmail}
      className='bg-black flex items-center justify-center w-full text-[18px] font-semibold text-white py-4 px-4 rounded-md'
      >Continue</button>
      
    </div>
    <p>
      Don't have an account? <Link href='/sign-up' className='text-blue-500 underline'>Sign Up</Link>  
    </p>
    </section>

  )
}

export default ForgotPassword
