import React from 'react'

const page = () => {
  return (
    <section className='py-20 px-4 md:px-20 min-h-screen'>
        <div className='flex flex-col p-5 justify-center md:flex-row md:justify-between gap-12 md:items-center'>
            <div className='flex flex-col gap-10 w-full md:w-[40%]'>
                <h1 className='text-[36px] font-medium'>Billing Details</h1>
                <form className='flex flex-col gap-5 w-full  text-nowrap'>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            First Name <span className='text-[#db4444]'>*</span>
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            Company Name 
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            Street Address <span className='text-[#db4444]'>*</span>
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184] w-full'>
                            Apartment, floor, etc. (optional)
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            Town/City <span className='text-[#db4444]'>*</span>
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            Phone Number <span className='text-[#db4444]'>*</span>
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5]  rounded-md'/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="first name" className='text-[#7D8184]'>
                            Email Address <span className='text-[#db4444]'>*</span>
                        </label>
                        <input type="text" name="first name" id="first name" className='w-full py-3 px-2 border-none outline-none bg-[#F5F5F5] rounded-md'/>
                    </div>
                </form>
            </div>
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default page
