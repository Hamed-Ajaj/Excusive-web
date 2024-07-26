import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '@/constants'

function Services() {
  return (
    <section className='h-auto w-full py-20 px-4 md:px-20'>
        <div className='flex justify-center items-center gap-16 gap-x-20'>
            {
                services.map(service => (
                    <ServiceCard service={service} />
                ))
            }
        </div>
    </section>
  )
}

export default Services