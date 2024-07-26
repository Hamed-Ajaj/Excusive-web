import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const SectionHeader = ({title,sectionTitle,arrows,button}) => {
  return (
    <div className='flex flex-col gap-10 '>
        <div className='flex gap-4 items-center'>
            <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[5px]'></div>
            <h4 className='text-[1rem] font-semibold text-[#DB4444]'>{title}</h4>   
        </div>
        <div className='flex justify-between items-center'>
                <h2 className='text-[36px] font-semibold'>{sectionTitle}</h2>
                <div className='flex gap-4 items-center'>
                {arrows &&(
                    <>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#F5F5F5] hover:bg-[#dfdfdf] cursor-pointer flex items-center justify-center'>
                            <ArrowLeft size={28} />
                        </div>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#F5F5F5] hover:bg-[#dfdfdf] cursor-pointer flex items-center justify-center'>
                            <ArrowRight size={28} />
                        </div>
                    </>
                )
                }
                {button &&(
                    <button className='bg-[#DB4444] text-white px-6 hover:opacity-90 py-3 rounded-md'>{button}</button>
                )
                }
            </div>
        </div>         
    </div>
  )
}

export default SectionHeader
