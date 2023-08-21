import React from "react";
import Card from "./basic-components/Card";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-screen h-full my-[20px] p-20">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="card-box">
          <h1 className="text-3xl md:text-4xl text-center m-10 font-bold">
            Portfolio
          </h1>
          <div className="cards flex justify-center gap-[10px] items-center flex-wrap">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
