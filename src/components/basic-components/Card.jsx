import React from "react";
import "../basic-components/card.css";

const Card = ({ id, title, url, siteImg }) => {
  return (
    <div key={id} className="card">
      <figure>
        <img src={siteImg} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base md:text-xl font-semibold">
          {title}
        </h2>
        <p className="my-3 text-sm md:text-base font-light">{url}</p>
        <div className="flex justify-end mt-3">
          <a href={url} className="text-sm md:text-base" target="_blank">
            Visit Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
