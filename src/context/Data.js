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
        "https://www.reshot.com/preview-assets/illustrations/W6CRPJNKST/isometric-travel-app-illustration-W6CRPJNKST-w1600.jpg",
      siteName: "Travino Travel",
      siteURL: "https://mohamedfaizal813.github.io/Travel-Concept/",
    },
    {
      id: 2,
      siteIMG:
        "https://www.reshot.com/preview-assets/illustrations/WDR7FKLXPH/marketing-online-WDR7FKLXPH-w1600.jpg",
      siteName: "Besnik Market",
      siteURL: "https://mohamedfaizal813.github.io/Besnik-market-concept/",
    },
    {
      id: 3,
      siteIMG:
        "https://www.reshot.com/preview-assets/illustrations/NTK76WHCL5/server-network-technology-NTK76WHCL5-w1600.jpg",
      siteName: "NetBook-Concept",
      siteURL: "https://mohamedfaizal813.github.io/NetBook-concept/",
    },
    {
      id: 4,
      siteIMG:
        "https://www.reshot.com/preview-assets/illustrations/K5VSWPFRC7/website-design-team-K5VSWPFRC7-w1600.jpg",
      siteName: "Sassify-Concept",
      siteURL: "https://mohamedfaizal813.github.io/Sassify-concept/",
    },
    {
      id: 5,
      siteIMG:
        "https://www.reshot.com/preview-assets/illustrations/65VK7FUGS2/school-bus-boy-65VK7FUGS2-w1600.jpg",
      siteName: "High-School",
      siteURL: "https://mohamedfaizal813.github.io/School-concept/",
    },
    {
      id: 6,
      siteIMG:
        "https://www.reshot.com/preview-assets/illustrations/C7AKEF2XSG/creative-work-process-C7AKEF2XSG-w1600.jpg",
      siteName: "JS Traders Pune",
      siteURL: "https://jstraderspune.com/",
    },
  ]);

  // services
  const [service, setService] = useState([
    {
      id: 1,
      serviceTAG: `<i class="fa-solid fa-terminal"></i>`,
      title: "Front-End Development",
    },
    {
      id: 2,
      serviceTAG: `<i class="fa-solid fa-pen-nib"></i>`,
      title: "Design Structure",
    },
    {
      id: 3,
      serviceTAG: `<i class="fa-solid fa-screwdriver-wrench"></i>`,
      title: "Research",
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
