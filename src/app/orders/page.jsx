"use client"
import React, { useState } from 'react'
import { ordersTab } from '@/constants'
import { orderItems } from '@/constants'

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('On shipping')
  const [status, setStatus] = useState('On shipping')
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setStatus(tab)
  }



  const filterOrders = (status) => {
    return orderItems?.map((order) => {
      return order.items.filter((item) => item.status === status)
    })
  }
  console.log(filterOrders(status))
  return (
    <section className='py-20 px-4 md:px-20 '>
        <div className='flex flex-col gap-10'>
            <h1 className='text-[30px] font-bold'>My Orders</h1>
            <div className='p-4 flex gap-10 items-center justify-between w-full bg-[#e1dfdf] opacity-90 rounded-full'>
              {
                ordersTab?.map((tab) => (
                  <div 
                  className={`py-4 flex items-center justify-center gap-4 cursor-pointer ${activeTab===tab.title?"bg-white text-black":"bg-transparent text-[#838282]"} rounded-full flex-1 `}
                  onClick={() => handleTabChange(tab.title)}
                  >
                    <p className='font-semibold'>{tab.title}</p>
                    <p className={`${activeTab===tab.title?"bg-black text-white":"bg-[#eeeeee] text-black"}  flex items-center justify-center py-2 w-[20px] h-[20px] rounded-full`}>{filterOrders(tab.title)?.length}</p>
                  </div>
                ))
              }
            </div>
            <div className='grid grid-cols-2 w-full gap-10'>
              {/* {
                filterOrders(status).map((item) => (
                  <div className='p-4 bg-white flex gap-4 items-center rounded-lg col-span-1'>
                    <img src={item.productImg} alt='product' className='w-20 h-20' />
                    <div className='flex-1'>
                      <p className='text-[#838282]'>{item.title}</p>
                      <p className='text-[#838282]'>${item.price} x {item.quantity}</p>
                    </div>
                    <p className='text-[#838282]'>{item.status}</p>
                  </div>
                ))
              } */}
              {
                orderItems?.map((order) => (
                  <div className='flex gap-10 items-center p-10 rounded-md border bg-gray-400 flex-wrap'>
                  {
                  order.items.map((item) => (
                    <div className='p-4 bg-white flex gap-4 items-center rounded-lg col-span-1'>
                      <img src={item.productImg} alt='product' className='w-20 h-20' />
                      <div className='flex-1'>
                        <p className='text-[#838282]'>{item.title}</p>
                        <p className='text-[#838282]'>${item.price} x {item.quantity}</p>
                      </div>
                      <p className='text-[#838282]'>{item.status}</p>
                    </div>
                  ))
                  }
                  </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default OrdersPage
