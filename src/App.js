import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { DataContextProvider } from "./context/Data";

const App = () => {
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Banner />
        <About />
        <Portfolio />
      </DataContextProvider>
    </>
  );
};

export default App;
