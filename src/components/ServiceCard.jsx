import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div
      className="flex flex-col gap-8 justify-center items-center p-5"
      key={service.id}
    >
      <div className="w-[80px] h-[80px] rounded-full bg-[#cbc8ce] flex justify-center items-center">
        <div className="w-[60px] h-[60px] rounded-full bg-[#000] flex justify-center items-center">
          <img src={service.img} alt={service.title} />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-4 items-center">
        <h1 className="text-[20px] font-semibold">{service.title}</h1>
        <p className="text-[0.8rem]">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
