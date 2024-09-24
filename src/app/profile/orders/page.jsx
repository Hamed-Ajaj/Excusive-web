"use client"
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Truck } from 'lucide-react'
import { IconLocation } from '@tabler/icons-react'
import Link from 'next/link'
import { useCart } from '@/app/context/cartContext'
const OrdersPage = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [activeTab, setActiveTab] = useState('On shipping')
  const [status, setStatus] = useState('On shipping')
  const date = new Date();
  const {orders} = useCart();
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setStatus(tab)
  }
  // orderItems?.map((order) => {
  //   order.items.map((item) => {
  //     console.log(item)
  //   })
  // })


  const filterOrders = (status) => {
    return orders?.filter((order) => order.status === status)
  }


  return (
    <section className='py-20 px-4 md:px-20 min-h-[80vh]'>
        <div className='flex flex-col gap-10'>
            <h1 className='text-[30px] font-bold'>My Orders</h1>
            <div className='p-4 hidden md:flex gap-10 items-center justify-between w-full bg-[#e1dfdf] opacity-90 rounded-full'>
              {
                ordersTab?.map((tab) => (
                  <div 
                  className={`py-4 flex items-center justify-center gap-4 cursor-pointer ${activeTab===tab.title?"bg-white text-black":"bg-transparent text-[#838282]"} rounded-full flex-1 `}
                  onClick={() => handleTabChange(tab.title)}
                  key={tab.title}
                  >
                    <p className='font-semibold'>{tab.title}</p>
                    <p className={`${activeTab===tab.title?"bg-black text-white":"bg-[#eeeeee] text-black"}  flex items-center justify-center py-2 w-[20px] h-[20px] rounded-full`}>{filterOrders(tab.title)?.length}</p>
                  </div>
                ))
              }
            </div>
            <div className='flex md:hidden'>
              <select name="" id=""
                className='p-2 bg-[#e1dfdf] w-full rounded-full text-[#838282] outline-none'
                onChange={(e) => handleTabChange(e.target.value)}
              >
                {
                  ordersTab?.map((tab) => (
                    <option key={tab.id} value={tab.title}>{tab.title}</option>
                  ))
                }
              </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-10'>
              {
                orders.length>0?(filterOrders(status)?.map((order) => (
                  <div key={order.orderId} className='flex flex-col gap-6 p-5 items-start  rounded-lg border relative min-h-[400px]'>
                    <div className='flex flex-col md:flex-row justify-between md:items-center gap-5 w-full'>
                      <div className='flex flex-col gap-1 items-start'>
                        <p className='text-[0.8rem] text-gray-400 font-medium'>OrderId</p>
                        <p className='text-[1.2rem] font-semibold'>#{order.orderId}</p>
                      </div>
                      <div className='flex flex-col md:flex-row gap-4 md:gap-2 items-start md:items-center text-[12px]'>
                        <p className='p-2 border text-[12px] rounded-full text-nowrap md:font-medium text-gray-400'>Estimated Arrival {(date.getDate()+3)} {months[date.getMonth()]}</p>
                        <p className='p-2 bg-green-200 text-green-500 font-medium rounded-full'>{order.status}</p>
                      </div>
                    </div>
                    <div className='flex w-full gap-3 md:justify-between items-center'>
                      <div className='flex text-[12px] text-nowrap md:text-[16px] items-center gap-1 p-1 md:p-2 border rounded-full font-medium text-black'><Truck size={18}/> {order.from}</div>
                      <div className='font-bold flex items-center'>
                        <p className='pb-2 hidden md:block'>..</p>
                        <FaArrowRight  /> 
                      </div>
                      <div className='flex text-[12px] text-nowrap md:text-[16px] items-center gap-1 p-1 md:p-2 border rounded-full font-medium text-black'><IconLocation size={18}/> {order.to}</div>
                      
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-10 p-5 rounded-lg justify-start w-full border overflow-visible max-h-[200px] overflow-y-auto items' >
                      {
                      order.items.map((item) => (
                        <div className=' bg-white flex gap-4  items-center rounded-lg ' key={item.id}>
                          <div className='w-20 h-20 flex justify-center items-center'>
                            <img src={item.productImg} alt='product' className='w-full h-full object-contain' />
                          </div>
                          <div className='flex-1'>
                            <p className='text-[#838282]'>{item.title}</p>
                            <p className='text-[#838282]'>${item.price} x {item.quantity}</p>
                          </div>
                          <p className='text-[#838282]'>{item.status}</p>
                        </div>
                      ))
                      }
                    </div>
                    <div className='flex justify-between items-center w-full py-4 px-3 bg-gray-200 absolute bottom-0 right-0 left-0 rounded-b-lg'>
                      <div className='flex gap-2 items-center'>
                      ${
                        order.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
                      }
                      <p className='text-[0.8rem] text-gray-400'>
                        ({order.items.length}  items)
                      </p>
                      </div>
                      <div>
                        <Link href={`orders/${order.orderId}`}>
                          <button className='bg-black text-white text-[14px] font-medium py-2 px-6 rounded-full hover:bg-[#313131] '>Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))):(
                  <div className='py-5 flex justify-center col-span-3'>
                      <h1 className='text-[20px] font-semibold'>No Orders Right Now</h1>
                  </div>
                )
              }
            </div>
        </div>
    </section>
  )
}

export default OrdersPage
