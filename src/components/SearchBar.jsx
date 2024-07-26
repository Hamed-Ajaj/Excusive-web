import React from 'react'
import {FaSearch} from 'react-icons/fa'
const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center relative '>
        <input type='text' placeholder='Search' className='border-none outline-none rounded-md bg-[#D9DBE9] border-gray-300 p-2 ' />
        <button className=' text-black text-xl p-1 absolute top-2 right-0'>
            <FaSearch />
        </button>
    </div>
  )
}

export default SearchBar