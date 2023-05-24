import React from "react";
import { ImWrench } from "react-icons/im";
import { SiAdguard } from "react-icons/si";
import { FaUsersCog, FaClock, FaTruck } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";

const Features = () => {
  return (
    <div className="mb-32">
      <div className="text-center">
        <h5 className="text-base font-bold text-orange uppercase">
          Core Features
        </h5>
        <h2 className="text-5xl font-bold leading-tight mt-5">Why Choose Us</h2>
        <p className="py-2 text-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="flex mt-12 justify-between ">
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <FaUsersCog className="h-14 w-14 z-10" />
          <p className="text-lg font-bold z-20">Expert Team</p>
        </div>
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <FaClock className="h-12 w-12 z-10" />
          <p className="text-lg font-bold z-20">Timely Delivery</p>
        </div>
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <BsHeadset className="h-14 w-14 z-10" />
          <p className="text-lg font-bold z-20">24/7 Support</p>
        </div>
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <ImWrench className="h-12 w-12 z-10" />
          <p className="text-lg font-bold z-20">Best Equipment</p>
        </div>
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <SiAdguard className="h-12 w-12 z-10" />
          <p className="text-lg font-bold z-20">100% Guranty</p>
        </div>
        <div className="border-2 border-[#E8E8E8] w-44 h-40 flex flex-col gap-3 justify-center items-center rounded-md hover:bg-orange text-darkGray duration-200 hover:text-white">
          <FaTruck className="h-12 w-12 z-10" />
          <p className="text-lg font-bold z-20">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
