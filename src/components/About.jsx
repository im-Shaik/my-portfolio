import React from "react";
import "../css/about.css";
import hero from "../assets/hero.jpg";

const About = () => {
  return (
    <section id="about" className="h-screen py-20">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="about-card w-full px-10">
          <div className="col-1">
            <img src={hero} alt="" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
