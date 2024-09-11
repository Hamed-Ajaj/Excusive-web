"use client"
import { profileMenuItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideProfileNav = () => {
    const pathname = usePathname()
  return (
    <aside className="space-y-4 h-full px-3 absolute top-0 -left-[300px] z-10 bg-white lg:static lg:flex  text-nowrap">
    <div className="flex flex-col gap-4 ">
      {profileMenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="text-[#db4444] flex gap-4 py-5  font-medium hover:opacity-90"
        >
          <div>{item.img}</div>
          <div className={`${pathname===`${item.subName}`?"underline font-semibold":""}`}>{item.name}</div>
        </Link>
      ))}
    </div>
  </aside>
  )
}

export default SideProfileNav