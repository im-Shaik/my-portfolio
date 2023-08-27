import React from "react";
import Marquee from "react-fast-marquee";
import Bootstrap from "../assets/skill/bootstrap.png";
import HTML from "../assets/skill/html.png";
import CSS from "../assets/skill/css.png";
import JS from "../assets/skill/js.png";
import react from "../assets/skill/react.png";
import Tailwind from "../assets/skill/tailwind.png";
import Git from "../assets/skill/git.png";
import GitHub from "../assets/skill/github.png";

import "../css/skill.css";

const Skill = () => {
  return (
    <div id="skill" className="skill my-[20px] py-20 ">
      <div className="container mx-auto px-3 max-w-[1100px]">
        <h1 className="text-3xl md:text-4xl text-center m-10 font-bold">
          Skill
        </h1>
        <div className="mt-[30px] marquee">
          <Marquee direction="right" pauseOnHover>
            <div>
              <img src={HTML} alt="html" />
            </div>
            <div>
              <img src={CSS} alt="css" />
            </div>
            <div>
              <img src={JS} alt="JS" />
            </div>
            <div>
              <img src={Bootstrap} alt="Bootstrap" />
            </div>
            <div>
              <img src={react} alt="React" />
            </div>
            <div>
              <img src={Tailwind} alt="Tailwind" />
            </div>
            <div>
              <img src={Git} alt="Git" />
            </div>
            <div>
              <img src={GitHub} alt="GitHub" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skill;
