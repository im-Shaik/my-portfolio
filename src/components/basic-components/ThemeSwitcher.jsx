import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("cyberpunk");
  const [change, setChange] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "cyberpunk") {
      setTheme("business");
      setChange(false);
      document.documentElement.setAttribute("data-theme", "business");
    } else {
      setTheme("cyberpunk");
      setChange(true);
      document.documentElement.setAttribute("data-theme", "cyberpunk");
    }

    localStorage.setItem("theme", theme);
  };

  const Icon = change ? MdDarkMode : MdOutlineDarkMode;

  return (
    <div>
      <Icon size={"25px"} cursor={true} color="gray" onClick={toggleTheme} />
    </div>
  );
};

export default ThemeSwitcher;
