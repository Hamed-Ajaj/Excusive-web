import { FilterIcon } from "lucide-react"
import { X } from "lucide-react"
const FilterComponent = () => {
  return (
    <nav className="px-3 w-full h-screen border-r">
        <h5 className=" flex items-center text-[24px] gap-4 pb-4 border-b"><FilterIcon size={22} /> Filters</h5>
        <hr className="w-full"/>
        <div className="flex flex-col py-4 w-full gap-5 "> 
            <div className="w-full flex items-center justify-between">
                <p>Applied Filters</p>
                <p className="font-medium text-[13px] underline cursor-pointer">Clear All</p>
            </div>
            <div className="flex gap-2 items-center">
                <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">Filter1 <span className="cursor-pointer text-red-500">
                <X size={12}/></span></div>12
                <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">Filter2 <span className="cursor-pointer text-red-500">
                <X size={12}/></span></div>
                <div className="bg-[#ECEFF1] p-1 font-medium text-[12px] flex items-center gap-2  rounded-sm">Filter3 <span className="cursor-pointer text-red-500">
                <X size={12}/></span></div>
            </div>
            <hr className="w-full"/>
        </div>
        <div className="py-2 border-b">
            <div className="flex items-center justify-between">
                <p>Category</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  duration-100 cursor-pointer`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div>
                <ul className="py-2  space-y-1 accent-black">
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="category1" id="category1" className="h-4 w-4" />
                        <label htmlFor="category1">Category1</label>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <input type="checkbox" name="category2" id="category2" className="h-4 w-4" />
                        <label htmlFor="category2">Category2</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="category3" id="category3" className="h-4 w-4" />
                        <label htmlFor="category3">Category3</label>
                    </div>
                </ul>
            </div>
        </div>
        <div className="py-2 border-b">
            <div className="flex items-center justify-between">
                <p>Status</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  duration-100 cursor-pointer`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div>
                <ul className="py-2  space-y-1 accent-black">
                    {/* create two radio button in stock and out of stock */}
                    <div className="flex gap-3 items-center">
                        <input type="radio" name="status" id="inStock" className="h-4 w-4" />
                        <label htmlFor="inStock">In Stock</label>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <input type="radio" name="status" id="outOfStock" className="h-4 w-4" />
                        <label htmlFor="outOfStock">Out of Stock</label>
                    </div>
                </ul>
            </div>
        </div>
        <div className="py-2 border-b">
        <div className="flex items-center justify-between">
                <p>Size</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  duration-100 cursor-pointer`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div>sizes</div>
        </div>
        <div className="py-2 border-b">
        <div className="flex items-center justify-between">
                <p>Color</p>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  duration-100 cursor-pointer`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div>Colors</div>
        </div>
    </nav>
  )
}

export default FilterComponent