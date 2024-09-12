import { SendIcon } from 'lucide-react'
import { myAccountLinks , quickLinks, socialMediaLinks} from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full h-auto p-4 md:p-12 bg-black mt-5 text-white flex flex-col md:flex-row gap-14 justify-center  md:justify-between md:items-start overflow-hidden'>
        <div className='flex flex-col gap-5'>
            <Link href='/'>
                <h1 className='text-[30px] font-semibold flex items-center'>Exclusive <img src="/icons/transparent_logo.png" className='invert' width={50} height={50} alt="" /></h1>
            </Link>
            <p>Subscribe & <br /> get 10% off on your first order!</p>
            <div className='flex relative max-w-[300px]'>
                <input type="email" name="email" id="email" placeholder='enter your email'  className=' w-full md:w-[250px] py-2 px-2 bg-transparent border border-white outline-none '/>
                <SendIcon size='24' className='absolute top-[10px] right-3 cursor-pointer hover:text-gray-300'/>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[20px] font-medium'>Account</h1>
            {myAccountLinks.map((link, index) => (
                <a key={index} href={link.href} className='hover:text-gray-300'>{link.label}</a>
            ))}
        </div>
        <div className='flexCol'>
            <h1 className='text-[20px] font-medium'>Quick Link</h1>
            {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className='hover:text-gray-300'>{link.label}</a>
            ))}
        </div>
        <div className='flexCol md:items-center md:justify-center gap-3'>
            <h1 className='text-[20px] font-medium'>Social Media</h1>
            <ul className='flex  gap-3 mt-12'>
                {socialMediaLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className='hover:text-gray-400'>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer