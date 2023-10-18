import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./scrollToTop.css";
import { useState } from "react";
import { useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState();

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={visible ? "scroll-Top visible" : "scroll-Top"}
        onClick={scrollTop}
      >
        <BsFillArrowUpSquareFill size={"40px"} />
      </button>
    </div>
  );
};

export default ScrollToTop;
