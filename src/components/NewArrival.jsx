import React from 'react'
import SectionHeader from './SectionHeader'
import Link from 'next/link'

function NewArrival() {
  return (
    <section className='h-auto py-20 px-4 md:px-20'>
        <SectionHeader title={"Featured"} sectionTitle={"New Arrival's"}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-8 mt-12'>
            <div className='md:col-span-2 md:row-span-2 p-12 bg-black relative'>
                <img src="/products/ps5.svg" alt="ps5"  className='w-full h-full object-cover z-10'/>
                <div className='z-20 flex flex-col gap-6 w-[250px]  absolute left-10 bottom-10'>
                    <h3 className='text-[24px] font-semibold text-white'>
                        PlayStation 5
                    </h3>
                    <p className='text-[14px] font-light text-white'>
                        Black and White version of the PS5 coming out on sale.
                    </p>
                    <Link href={"/"} className='text-white font-medium border-b-2 w-[85px] border-spacing-2'>
                        Shop Now!
                    </Link>
                </div>
            </div>
            <div className='md:col-span-2 p-10 bg-black relative'>
                <div className='z-20 flex flex-col gap-6 w-[250px]  absolute left-10 bottom-10'>
                    <h3 className='text-[24px] font-semibold text-white'>
                        Women’s Collections
                    </h3>
                    <p className='text-[14px] font-light text-white'>
                        Featured woman collections that give you another vibe.
                    </p>
                    <Link href={"/"} className='text-white font-medium border-b-2 w-[85px] border-spacing-2'>
                        Shop Now!
                    </Link>
                </div>
            </div>
            <div className='col-span-1 bg-black p-10 flex justify-center items-center relative'>
                <img src="/products/speakers.svg" className='z-20' alt="speakers" />
                <div className='z-20 flex flex-col gap-3 w-[250px]  absolute left-10 bottom-10'>
                    <h3 className='text-[24px] font-semibold text-white'>
                        Speakers
                    </h3>
                    <p className='text-[14px] text-white'>
                        Amazon wireless speakers
                    </p>
                </div>
                <div className='w-full h-full rounded-full absolute top-0 right-0  bg-white blur-3xl opacity-30 z-10'>
                    .
                </div>
            </div>
            <div className='col-span-1 bg-black p-10 flex justify-center items-center relative'>
                <img src="/products/perfume.svg" alt="perfume" className='z-20' />
                <div className='z-20 flex flex-col gap-3 w-[250px]  absolute left-10 bottom-10'>
                    <h3 className='text-[24px] font-semibold text-white'>
                        Perfume
                    </h3>
                    <p className='text-[14px] text-white'>
                        GUCCI INTENSE OUD EDP                
                    </p>
                </div>
                <div className='w-full h-full rounded-full absolute top-0 right-0  bg-white blur-3xl opacity-30 z-10'>
                    .
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default NewArrival




