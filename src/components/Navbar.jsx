import React from "react";
import "../css/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "#home",
        "#about",
        "#portfolio",
        "#services",
        "#skill",
        "#contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 100) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="container mx-auto md:p-0 lg:px-3 max-w-[1100px]">
        <div className="nav-container">
          <div>
            <a href="#home" className="logo">
              Shaik.
            </a>
          </div>

          <div className={toggle ? "nav-menus show-menu" : "nav-menus"}>
            <ul className="nav-list">
              <li className="nav-item text-sm md:text-base">
                <a
                  href="#home"
                  // onClick={() => setActiveLink("#home")}
                  className={
                    activeLink === "#home" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-estate nav-icon"></i>
                  Home
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a
                  href="#about"
                  // onClick={() => setActiveLink("#about")}
                  className={
                    activeLink === "#about" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-user nav-icon"></i>
                  About
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a
                  href="#portfolio"
                  // onClick={() => setActiveLink("#portfolio")}
                  className={
                    activeLink === "#portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-gitlab nav-icon"></i>
                  Portfolio
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a
                  href="#services"
                  // onClick={() => setActiveLink("#services")}
                  className={
                    activeLink === "#services" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-arrow nav-icon"></i>
                  Services
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a
                  href="#skill"
                  // onClick={() => setActiveLink("#skill")}
                  className={
                    activeLink === "#skill" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-suitcase nav-icon"></i>
                  Skill
                </a>
              </li>

              <li className="nav-item text-sm md:text-base">
                <a
                  href="#contact"
                  // onClick={() => setActiveLink("#contact")}
                  className={
                    activeLink === "#contact" ? "nav-link active" : "nav-link"
                  }
                >
                  <i className="uil uil-link nav-icon"></i>
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="close"
              onClick={(e) => {
                e.preventDefault();
                showMenu(!toggle);
              }}
            >
              <i className="uil uil-multiply nav-link"></i>
            </a>
          </div>
          <a
            href="#"
            className="app"
            onClick={(e) => {
              e.preventDefault();
              showMenu(!toggle);
            }}
          >
            <i className="uil uil-apps nav-link"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
