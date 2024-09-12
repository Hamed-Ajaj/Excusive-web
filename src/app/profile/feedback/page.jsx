import React from 'react'

const FeedBackPage = () => {
  return (
    <section className='flex flex-col gap-10 items-center py-10 md:px-10 h-full mb-28'>
    <h1 className='text-center text-[40px] font-bold'>Feedback Form</h1>
    <div className='w-[340px] sm:w-[400px] md:w-[600px] h-auto p-5 md:p-14 border-2 shadow-lg rounded-lg'>
      <form className='flex flex-col w-full gap-4 items-start'>
        <div className='flex flex-col gap-1 items-start w-full'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Enter your name' className='border-2 w-full border-gray-300 px-2 py-4 rounded-2xl' />
        </div>
        
        <div className='flex flex-col gap-1 items-start w-full'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter your email' className='border-2 w-full border-gray-300 px-2 py-4 rounded-2xl' />
        </div>

        <div className='flex flex-col gap-1 items-start w-full'>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' placeholder='Enter your subject' className='border-2 w-full border-gray-300 px-2 py-4 rounded-2xl' />
        </div>

        <div className='flex flex-col gap-1 items-start w-full'>
          <label htmlFor='message'>Message</label>
          <textarea type='text' id='message' rows={5} placeholder='Enter your Message' className='border-2 resize-none w-full border-gray-300 px-2 py-4 rounded-2xl' />
        </div>

        <div className='flex justify-center items-center w-full'>
          <button
            type='submit'
            className='bg-[#db4444] text-white py-4 px-10 hover:opacity-90  mt-4 rounded-full'
          >
            Submit
          </button>

        </div>
      </form>
    </div>
    </section>
  )
}

export default FeedBackPage