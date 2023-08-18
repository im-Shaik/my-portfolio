import React from "react";
import "../css/about.css";
import hero from "../assets/hero.jpg";

const About = () => {
  return (
    <section id="about" className="h-screen py-20">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="mt-5 px-10">
          <h1 className="text-3xl md:text-4xl text-center m-10 font-bold">
            About me
          </h1>
          <div className="about-card">
            <div className="col-1">
              <img src={hero} alt="" />
            </div>
            <div className="col-2">
              <div className=" mb-5">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                  Shaik mohamed faizal
                </h1>
              </div>
              <p className="font-medium text-base md:text-lg">
                A{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Front-end_web_development"
                  className="inline-flex justify-between items-center gap-1"
                  target="_blank"
                >
                  front-end developer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    role="img"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class=" css-1jtd2m7 eac13zx0 w-4"
                  >
                    <path d="M14.504 3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3.085l-9.594 9.594a.5.5 0 000 .707l.707.708a.5.5 0 00.707 0l9.594-9.595V9.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"></path>
                    <path d="M5 3.002a2 2 0 00-2 2v13.996a2 2 0 001.996 2.004h14a2 2 0 002-2v-6.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v6.5L5 18.998V5.002L11.5 5a.495.495 0 00.496-.498v-1a.5.5 0 00-.5-.5H5z"></path>
                  </svg>
                </a>{" "}
                works on the user side of an application, program, system or
                software. Their work helps facilitate successful user
                experiences. They might adjust the layout of a website, for
                example, or ensure a program is easy to use and navigate. By
                looking at programs and systems from a user's perspective,
                front-end developers can help design systems that meet user
                needs and operate successfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
