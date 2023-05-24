import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./CarouselItems.css";

const CarouselItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative overflow-hidden rounded-md  w-full h-[600px]"
    >
      <div className="carousel-img">
        <img src={image} alt="" className="w-full object-cover rounded-md" />
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          servicing
        </h1>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-white text-xl">
          There Are Many Variations Of Passages Of Available ,but <br />
          The Majority Have Suffered Alteration In some From
        </p>
      </div>
      <div className="absolute flex gap-5 transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn bg-[#FF3811] border-2 border-[#FF3811] hover:bg-transparent hover:border-[#FF3811]">
          Discover More
        </button>
        <button className="btn border-2 border-white text-white bg-transparent">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-opacity-80 bg-gray-500 border-none hover:bg-[#FF3811]"
        >
          <FaArrowLeft className="text-lg opacity-70" />
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-opacity-80 bg-gray-500 border-none hover:bg-[#FF3811]"
        >
          <FaArrowRight className="text-lg opacity-70" />
        </a>
      </div>
    </div>
  );
};

export default CarouselItems;
