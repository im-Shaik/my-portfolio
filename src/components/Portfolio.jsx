import React from "react";
import Card from "./basic-components/Card";
import { useDataContext } from "../context/Data";

const Portfolio = () => {
  const data = useDataContext();

  return (
    <section id="portfolio" className="h-screen p-20">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="card-box flex justify-between items-center flex-wrap">
          <h1 className="text-3xl md:text-4xl text-center m-10 font-bold">
            Portfolio
          </h1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
