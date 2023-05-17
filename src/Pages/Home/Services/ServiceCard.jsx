import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div>
      <div className="card card-compact w-96 p-4 border border-[#999] border-opacity-30 rounded-md bg-base-100 shadow-lg ">
        <figure>
          <img
            className="rounded-md h-[230px] object-cover hover:scale-[1.1]  duration-200"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5">
          <h2 className="text-xl font-bold text-gray2">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="my-3 text-orange font-bold text-base">
              Price:${price}
            </p>
            <FaArrowRight className="text-orange cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
