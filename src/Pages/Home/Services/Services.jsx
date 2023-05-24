import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-32 mb-36">
      <div className="text-center ">
        <p className="text-base font-bold text-orange uppercase ">Services</p>
        <h2 className="text-5xl font-bold leading-tight mt-5">Our Services</h2>
        <p className="py-2 text-gray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio,
          obcaecati itaque recusandaebr
          <br /> hic maxime amet Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-16 justify-between gap-y-14 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="border-2 border-orange px-6 py-3 text-lg text-orange font-bold rounded-md">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
