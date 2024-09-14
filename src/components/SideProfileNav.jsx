"use client"
import { profileMenuItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideProfileNav = () => {
    const pathname = usePathname()
  return (
    <aside className="lg:space-y-4 h-full px-3 z-10 bg-white flex text-nowrap">
    <div className="flex   lg:flex-col gap-4 overflow-x-auto ">
      {profileMenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="lg:text-[#db4444] flex flex-col justify-center items-center lg:flex-row lg:justify-start gap-4 p-2 lg:py-5  font-medium hover:opacity-90"
        >
          <div className={`${pathname===`${item.subName}`?"text-[#db4444] lg:underline font-semibold":""}`}>{item.img}</div>
          <div className={`${pathname===`${item.subName}`?"text-[#db4444] lg:underline font-semibold":""}`}>{item.name}</div>
        </Link>
      ))}
    </div>
  </aside>
  )
}

export default SideProfileNav