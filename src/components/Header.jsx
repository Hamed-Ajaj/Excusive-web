"use client"
import { useState } from 'react'
import ShopNow from './ShopNow'
import Link from 'next/link'
import SearchBar from './SearchBar'
import { links } from '@/constants'
import { Heart, MenuIcon, ShoppingBag, ShoppingCartIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const pathname = usePathname()
    const user = true
  return (
    <header className='border-b ' >
        <ShopNow />
        <nav className='flex justify-between items-center p-4 sm:p-12'>
            <div className='flex items-center'>
                <h1 className='text-[19px] md:text-[24px] font-bold'>
                <Link href={"/"}>Exclusive</Link>
                </h1>
            </div>
            <div className='hidden lg:flex gap-12 items-center'>
                {links.map((link, index) => (
                    <Link href={link.href} key={index}>
                        <span className={`text-xl font-normal text-black ${pathname === link.href ? 'underline' : ''}`}>{link.label}</span>
                    </Link>
                ))}
            </div>
            <div className='flex gap-4 sm:gap-8 items-center '>
                <div className='block lg:hidden relative'>
                    <MenuIcon className='cursor-pointer' width={35} height={35} onClick={() => setShowMenu(!showMenu)}/>
                    {showMenu && (
                        <div className='flex flex-col gap-4 absolute top-12 -right-0 bg-black p-4 rounded-lg'>
                            {links.map((link, index) => (
                                <Link href={link.href} key={index}>
                                    <span className={`text-xl font-normal text-white ${pathname === link.href ? 'underline' : ''}`} onClick={() => setActiveLink(index)}>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                {/* SearchBar component */}
                <SearchBar />
                {user ?(
                    <>
                        <Link href={"/Wishlist"}><Heart size={30} className='cursor-pointer hover:text-gray-600'/></Link>
                        <Link href="/cart"><ShoppingCartIcon size={30} className='cursor-pointer hover:text-gray-600'/></Link>
                    </>
                ):(
                    <></>
                )}
                
                {/* Menu Icon */}
            </div>
        </nav>    
    </header>
  )
}

export default Header
