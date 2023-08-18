// ObjectArrayContext.js
import React, { createContext, useContext } from "react";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export function DataContextProvider({ children }) {
  const data = [
    {
      id: 1,
      siteName: "Travino Travel",
      siteURL: "https://mohamedfaizal813.github.io/Travel-Concept/",
    },
    {
      id: 2,
      siteName: "Besnik Market",
      siteURL: "https://mohamedfaizal813.github.io/Besnik-market-concept/",
    },
    {
      id: 3,
      siteName: "NetBook-Concept",
      siteURL: "https://mohamedfaizal813.github.io/NetBook-concept/",
    },
    {
      id: 4,
      siteName: "Sassify-Concept",
      siteURL: "https://mohamedfaizal813.github.io/Sassify-concept/",
    },
    {
      id: 5,
      siteName: "High-School",
      siteURL: "https://mohamedfaizal813.github.io/School-concept/",
    },
  ];

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
