import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-footer mb-32 text-white flex justify-between px-20  py-28 rounded-md">
      <div className="flex items-center gap-4">
        <FaCalendarAlt className="h-9 w-9 text-orange" />
        <div>
          <p className="">We are open monday-friday</p>
          <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="h-9 w-9 text-orange " />
        <div>
          <p>Have a question?</p>
          <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="h-9 w-9 text-orange" />
        <div>
          <p>Need a repair? our address</p>
          <p className="text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
