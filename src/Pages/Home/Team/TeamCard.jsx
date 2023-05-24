import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ teamMember }) => {
  const { id, img, title, skill } = teamMember;
  return (
    <div>
      <div className="card card-compact w-[360px] p-4 border border-[#999] border-opacity-30 rounded-md bg-base-100 shadow-lg ">
        <figure>
          <img
            className="rounded-md w-80 h-72  object-cover duration-200"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5 text-center">
          <h2 className="text-xl font-bold text-darkGray">{title}</h2>
          <p className="my-3 text-orange font-bold text-base">{skill}</p>
        </div>
        <div className="flex justify-center gap-2 mt-2 mb-3  ">
          <FaFacebook className="w-7 h-7 cursor-pointer" />
          <FaTwitter className="w-7 h-7 cursor-pointer" />
          <FaLinkedin className="w-7 h-7 cursor-pointer" />
          <FaInstagram className="w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
