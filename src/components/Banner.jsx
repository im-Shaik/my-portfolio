import React from "react";
import { Typewriter } from "react-simple-typewriter";
import hero from "../assets/hero.jpg";
import "../css/banner.css";

const Banner = () => {
  return (
    <section className="banner h-screen py-20" id="home">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="relative w-full flex justify-between items-center px-10">
          <div className="flex flex-col gap-3 social md:ml-3 text-xl ">
            <a href="">
              <box-icon
                type="logo"
                color="rgb(52 78 65)"
                name="github"
              ></box-icon>
            </a>
            <a href="">
              <box-icon
                type="logo"
                color="rgb(52 78 65)"
                name="instagram-alt"
              ></box-icon>
            </a>
            <a href="">
              <box-icon
                name="stack-overflow"
                type="logo"
                color="rgb(52 78 65)"
              ></box-icon>
            </a>
          </div>
          <div className="w-full text-center md:text-left p-5 md:p-20 name md:w-[50%] ">
            <div className="p-1 inline-block mr-2 shadow bg-primary md:p-3 text-white">
              I am -
            </div>
            <h1 className="text-base md:text-2xl lg:text-4xl inline-block font-signature select-none">
              شيق مممذ <span className="text-primary">فيزل</span>
            </h1>
            <span className=" text-base md:text-lg lg:text-xl block mt-4 text-secondary underline">
              Shaik mohamed faizal
            </span>

            <h2 className=" text-base md:text-lg lg:text-xl">
              a{" "}
              <span className="font-bold text-primary">
                <Typewriter
                  words={["Freelancer", "Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  cursorColor="#344E41"
                  typeSpeed={50}
                  deleteSpeed={40}
                  delaySpeed={3000}
                />
              </span>
            </h2>
          </div>
          <div className="object w-[45%] ">
            <img src={hero} className="shadow-md" alt="hero.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
