// data context!
import React, { createContext, useContext } from "react";
import { useState } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export function DataContextProvider({ children }) {
  // portfolio
  const [data, setData] = useState([
    {
      id: 1,
      siteIMG:
        "https://i.pinimg.com/236x/41/0f/ec/410fecb2c951ee9b149b7cbc3fcaca09.jpg",
      siteName: "Travino Travel",
      siteURL: "https://mohamedfaizal813.github.io/Travel-Concept/",
    },
    {
      id: 2,
      siteIMG:
        "https://i.pinimg.com/236x/33/09/df/3309df93c1572be7b896b1eed86ef316.jpg",
      siteName: "Besnik Market",
      siteURL: "https://mohamedfaizal813.github.io/Besnik-market-concept/",
    },
    {
      id: 3,
      siteIMG:
        "https://i.pinimg.com/236x/cf/1d/67/cf1d6779e32777500ca31395f3a9db0d.jpg",
      siteName: "NetBook-Concept",
      siteURL: "https://mohamedfaizal813.github.io/NetBook-concept/",
    },
    {
      id: 4,
      siteIMG:
        "https://i.pinimg.com/236x/6d/b5/e8/6db5e806a108008a2c0845a8df31985d.jpg",
      siteName: "Sassify-Concept",
      siteURL: "https://mohamedfaizal813.github.io/Sassify-concept/",
    },
    {
      id: 5,
      siteIMG:
        "https://i.pinimg.com/236x/e3/25/71/e325716a490f2ec633e426740c6c5465.jpg",
      siteName: "High-School",
      siteURL: "https://mohamedfaizal813.github.io/School-concept/",
    },
  ]);

  // services
  const [service, setService] = useState([
    {
      id: 1,
      serviceIMG: "<box-icon name='code-curly'></box-icon>",
      title: "Front-End Development",
    },
    {
      id: 2,
      serviceIMG: `<i className="uil uil-pagelines"></i>`,
      title: "Design Structure",
    },
  ]);

  const contextValue = {
    data,
    service,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
