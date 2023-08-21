import React from "react";
import "../basic-components/card.css";
import { useDataContext } from "../../context/Data";

const Card = () => {
  const data = useDataContext();

  return data.map((item) => {
    const { siteName, siteURL } = item;
    return (
      <div className="card w-[350px] shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{siteName}</h2>
          <p className="my-3">{siteURL}</p>
          <div className="flex justify-end mt-3">
            <a href={siteURL} target="_blank">
              Visit Now!
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
