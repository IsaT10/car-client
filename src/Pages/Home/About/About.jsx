import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero bg-white my-20">
      <div className="hero-content flex-col p-0 lg:flex-row">
        <div className="w-1/2 relative ">
          <img
            alt=""
            src={person}
            className="w-3/4 h-[500px] object-cover rounded-lg "
          />
          <img
            alt=""
            src={parts}
            className=" absolute right-20 top-[270px] w-[300px] h-[300px] object-cover rounded-lg border-8 
         border-white
            "
          />
        </div>
        <div className="w-1/2 pr-10">
          <p className="text-base font-bold text-orange uppercase mb-5">
            About us
          </p>
          <h2 className="text-5xl font-bold leading-tight">
            We are qualified <br />
            & of experience <br /> in this field
          </h2>
          <p className="py-6 text-gray font-semibold">
            There Are Many Variations Of Passages Of Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum ad cupiditate fugit quaerat
            molestiae. Ducimus nihil voluptates perspiciatis, accusantium nulla
            quod ullam totam corporis.
          </p>
          <p className="mb-8 text-gray font-semibold -mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit
            iure possimus aspernatur maxime et facilis dolorum molestiae
          </p>
          <button className="btn  bg-[#FF3811] border-2 border-[#FF3811] hover:bg-transparent hover:border-[#FF3811] hover:text-orange mt-20">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
