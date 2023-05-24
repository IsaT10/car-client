import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { img, title, price, id } = product;
  return (
    <div className="card card-compact w-[360px] p-4 border border-lightGray  rounded-md bg-base-100 shadow-lg  text-center">
      <div className="bg-lightGray w-80 py-9 mx-auto rounded-md">
        <img className="w-36 h-36  object-cover mx-auto" src={img} alt="" />
      </div>
      <div className="flex justify-center items-center gap-1 text-yellow mt-5 mb-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h4 className="text-darkGray font-bold text-2xl">{title}</h4>
      <p className="my-3 text-orange font-bold text-base">Price:{price}.00</p>
    </div>
  );
};

export default ProductCard;
