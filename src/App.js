import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { DataContextProvider } from "./context/Data";

const App = () => {
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Banner />
        <About />
        <Portfolio />
        <Service />
        <Skill />
        <Contact />
      </DataContextProvider>
    </>
  );
};

export default App;
