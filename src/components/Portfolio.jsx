import React from "react";
// import Card from "./basic-components/Card";
import Slider from "./basic-components/Slider";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" my-[20px] py-[10px] md:p-[30px] lg:p-20"
    >
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="card-box">
          <h1 className="text-3xl md:text-4xl text-center mb-5 md:mb-10 font-bold">
            Portfolio
          </h1>
          <div className="my-[50px] md:my-0">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
