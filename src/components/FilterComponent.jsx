"use client";
import { categoryFilter, colors, sizes } from "@/constants";
import { FilterIcon } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
// import FilterMenu from "./filterMenu";
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
      
    </nav>
  );
};

export default FilterComponent;
