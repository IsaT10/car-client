import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Team from "../Team/Team";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Products />
      <Team />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
