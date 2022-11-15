import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card card-compact w-96 mx-auto bg-base-200 shadow-2xl ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <Link to={`/checkout/${_id}`} className="card-actions justify-center">
          <button className="btn btn-warning hover:bg-black w-full font-bold text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
