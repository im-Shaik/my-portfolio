import React from "react";
import "../basic-components/card.css";

const Card = () => {
  return (
    <div className="card w-[350px] shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">Shoes!</h2>
        <p className="font-normal my-3">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="flex justify-end mt-3">
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
