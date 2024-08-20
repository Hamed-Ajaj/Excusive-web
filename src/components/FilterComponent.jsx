"use client";
import { categoryFilter, colors, sizes } from "@/constants";
import { FilterIcon } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import FilterMenu from "./filterMenu";
const FilterComponent = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [checkBox,setCheckBox] = useState(categoryFilter)
  const [appliedFilters, setAppliedFilters] = useState();
  console.log(appliedFilters)

  // let result = ntc.name('#000');
  // console.log(result[1])
  // handle checkboxes state change 

  // useEffect(() => {

  // },[])

  const handleCheckBox = (e) => {
    const {name,checked} = e.target;
    const newCheckBox = checkBox.map((item) => {
      if(item.name === name){
        item.checked = checked
      }
      return item
    })
    setCheckBox(newCheckBox)

  }

  // const handleAddAppliedFilter = (filter) => {
  //   if (!appliedFilters.includes(filter)) {
  //     setAppliedFilters([...appliedFilters, filter]);
  //   }
  // }

  
  const handleChangeColor = (color) => {
    setActiveColor(color);
  };

  const handleChangeSize = (size) => {
    setActiveSize(size);
  };

  // const handleDeleteAppliedFilter = (filter) => {
  //   setAppliedFilters(appliedFilters.filter((appliedFilter) => appliedFilter !== filter));
  // }
  return (
    <nav className="px-3 w-full min-w-[250px] min-h-full border-r">
      <h5 className=" flex items-center text-[24px] gap-4 pb-4 border-b">
        <FilterIcon size={22} /> Filters
      </h5>
      <hr className="w-full" />
      <div className="flex flex-col py-4 w-full gap-5 ">
        <div className="w-full flex items-center justify-between">
          <p>Applied Filters</p>
          <p className="font-medium text-[13px] underline cursor-pointer" 
          onClick={() => setAppliedFilters("")}
          >
            Clear All
          </p>
        </div>
        <div className="flex flex-wrap gap-1 items-center">
          {categoryFilter && categoryFilter?.map((filter) => (
            filter.checked && 
              (
              <div key={filter.id} className="flex gap-2 items-center bg-[#F5F5F5] p-2 rounded-[5px]">
                <p className="text-[12px]">{filter.name}</p>
                <X size={12} className="cursor-pointer text-red-500"/>
              </div>
              )
          ))}
        </div>
        <hr className="w-full" />
      </div>
      {/* category filter */}
      <FilterMenu key={"category"} filter={"Category"}>
        <div>
          <ul className="py-2  space-y-1 accent-black">
          {categoryFilter?.map((category,index) => (
            <div key={index} className="flex gap-3 items-center">
              <input
                type="checkbox"
                name={category.name}
                id={category.name}
                className="h-4 w-4"
                onChange={handleCheckBox}
                checked={category.checked}
              />
              <label htmlFor="category1">{category.name}</label>
            </div>
          ))}
          </ul>
        </div>
      </FilterMenu>
      {/* status filter */}
      <FilterMenu filter={"Status"}>
        <div>
          <ul className="py-2  space-y-1 accent-black">
            {/* create two radio button in stock and out of stock */}
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="status"
                id="inStock"
                className="h-4 w-4"
              />
              <label htmlFor="inStock">In Stock</label>
            </div>
            <div className="flex gap-3 items-center ">
              <input
                type="radio"
                name="status"
                id="outOfStock"
                className="h-4 w-4"
              />
              <label htmlFor="outOfStock">Out of Stock</label>
            </div>
          </ul>
        </div>
      </FilterMenu>
      {/* size filter */}
      <FilterMenu filter={"Size"}>
        <div className="flex flex-wrap mt-5 gap-3 items-center">
          {sizes.map((size) => (
            <div
              key={size.id}
              onClick={() => handleChangeSize(size.size)}
              className={`w-[35px] p-2 h-[35px] cursor-pointer ${
                activeSize === size.size
                  ? "bg-[#db4444] border-none text-white"
                  : "text-black"
              }  text-[14px] font-medium flex justify-center items-center border border-black rounded-[5px]`}
            >
              {size.size}
            </div>
          ))}
        </div>
      </FilterMenu>
      {/* color filter */}
      <FilterMenu filter={"Color"}>
        <div className="flex gap-4 mt-5 flex-wrap items-center">
          {colors.map(({ id, color }) => (
            <div
              key={id}
              onClick={() => handleChangeColor(color)}
              className={`w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-${color} bg-black rounded-full`}
            >
              <div className="w-full flex justify-center items-center">
                <img
                  src="/icons/selected.svg"
                  alt="selected"
                  className={` ${
                    activeColor === color ? "block" : "hidden"
                  } w-[60%] object-cover`}
                />
              </div>
            </div>
          ))}
        </div>
      </FilterMenu>
    </nav>
  );
};

export default FilterComponent;
