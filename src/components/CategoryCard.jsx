import Link from "next/link";
import React from "react";

const CategoryCard = ({category}) => {
  return (
    <Link href={`/category/${category.title}`}>
      <div
        key={category.id}
        className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-200 gap-6 border-2 rounded-md min-w-[190px] h-[170px] p-8"
      >
        <img
          src={category.img}
          alt={category.title}
          className="w-[50px] h-[50px]"
        />
        <h3 className="w-full text-center">{category.title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
