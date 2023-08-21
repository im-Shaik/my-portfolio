import React from "react";
import "../css/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="nav-container">
          <div>
            <a href="#home" className="logo">
              Shaik
            </a>
          </div>

          <div className={toggle ? "nav-menus show-menu" : "nav-menus"}>
            <ul className="nav-list">
              <li className="nav-item text-sm md:text-base">
                <a href="#home" className="nav-link active">
                  <i className="uil uil-estate nav-icon"></i>
                  Home
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a href="#about" className="nav-link ">
                  <i className="uil uil-user nav-icon"></i>
                  About
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a href="#portfolio" className="nav-link ">
                  <i className="uil uil-gitlab nav-icon"></i>
                  Portfolio
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a href="#services" className="nav-link ">
                  <i className="uil uil-arrow nav-icon"></i>
                  Services
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a href="#skill" className="nav-link ">
                  <i className="uil uil-suitcase nav-icon"></i>
                  Skill
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a href="#contact" className="nav-link ">
                  <i className="uil uil-link nav-icon"></i>
                  Contact
                </a>
              </li>
            </ul>
            <a href="#" className="close" onClick={() => showMenu(!toggle)}>
              <i className="uil uil-multiply nav-link"></i>
            </a>
          </div>
          <a href="#" className="app" onClick={() => showMenu(!toggle)}>
            <i className="uil uil-apps nav-link"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

/* 

const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    const threshold = 100;

    if (window.scrollY > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`w-full bg-primary py-5 ${scrolled ? "active" : ""}`}>
        <div className="container mx-auto px-3 max-w-[1100px]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-signature cursor-pointer select-none text-white">
                شيق مممذ فيزل
              </h1>
            </div>
            <div className="nav-links">
              <ul
                className={mobile ? "nav-links-mobile" : "links"}
                onClick={() => setMobile(false)}
              >
                <li>
                  <Link To="#">Home</Link>
                </li>
                <li>
                  <Link To="#">Portfolio</Link>
                </li>
                <li>
                  <Link To="#">Contact</Link>
                </li>
              </ul>
              <button
                className="toggle block md:hidden"
                onClick={() => setMobile(!mobile)}
              >
                {mobile ? (
                  <PiXBold color="white" fontSize={"24px"} />
                ) : (
                  <PiHamburgerDuotone color="white" fontSize={"24px"} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );

*/
