import React from 'react'

const CTA = () => {
  return (
    <section className='mb-10 py-10 w-full  md:px-20'>
        <div className='w-full min-h-[500px] p-4 md:p-12 flex justify-center items-center flex-col-reverse md:flex-row md:justify-between gap-8  bg-black'>
            <div className='space-y-12 md:space-y-10 md:p-10'>
                    <h1 className='text-[48px] font-semibold text-white'>
                        Enhance Your <br /> Music Experience
                    </h1>
                <div className='flex gap-6'>
                    <div className='w-[70px] h-[70px] bg-white rounded-full flex flex-col justify-center items-center '>
                        <h4 className='font-semibold'>24</h4>
                        <p className='font-light text-[11px]'>Hours</p>
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-full  flex flex-col justify-center items-center'>
                        <h4 className='font-semibold'>03</h4>
                        <p className='font-light text-[11px]'>Days</p>
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-full  flex flex-col justify-center items-center'>
                        <h4 className='font-semibold'>59</h4>
                        <p className='font-light text-[11px]'>Minutes</p>
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-full flex flex-col justify-center items-center'>
                        <h4 className='font-semibold'>23</h4>
                        <p className='font-light text-[11px]'>Seconds</p>
                    </div>
                </div>
                <button className='py-[1rem] px-[3rem] bg-[#00FF66] hover:bg-[#2dfd80] text-white font-medium rounded-md'>Buy Now!</button>
            </div>
            <div className='hidden items-center justify-center lg:flex lg:w-[40%] h-full relative'>
                <img src="/CTA.svg" className='object-cover z-20' />
                <div className= 'w-[500px] h-[350px] bg-white z-10 md:absolute top-0 right-0 rounded-full blur-3xl opacity-40' >
                    .
                </div>    
            </div>
        </div>
    </section>
  )
}

export default CTA