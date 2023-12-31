import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Line from "./components/basic-components/Line";
import { DataContextProvider } from "./context/Data";
import { useEffect, useState } from "react";
import Loader from "./components/basic-components/Loader";
import ScrollToTop from "./components/basic-components/ScrollToTop";
import GeolocationComponent from "./components/basic-components/GeolocationComponent";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <DataContextProvider>
          <Line />
          <Navbar />
          <Banner />
          <About />
          <Portfolio />
          <Service />
          <Skill />
          <Contact />
          <ScrollToTop />
          <GeolocationComponent />
          <Line />
        </DataContextProvider>
      )}
    </>
  );
};

export default App;
