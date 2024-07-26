import React from "react";

const CategoryCard = ({category}) => {
  return (
    <div
      key={category.id}
      className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 gap-6 border-2 rounded-md min-w-[190px] min-h-[150px] p-8"
    >
      <img
        src={category.img}
        alt={category.title}
        className="w-[50px] h-[50px]"
      />
      <h3>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
