"use client"

import { useState } from "react"
const FilterMenu = ({filter,children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-2 flex flex-col  border-b">
        <div className="flex items-center mb-5 justify-between">
          <p>{filter}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${isOpen?"rotate-180":"rotate-0"}  duration-100 cursor-pointer`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsOpen(!isOpen)}

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } `}
        >
          {children}
        </div>
      </div>
  )
}

export default FilterMenu