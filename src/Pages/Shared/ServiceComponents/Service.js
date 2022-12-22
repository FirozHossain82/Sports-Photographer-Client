import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, serviceCharge, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6  pb-8">
      <figure className="px-10 pt-10">
        <img
          src={img}   className=" rounded-xl  h-[200px]"
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-orange-600 font-semibold text-2xl"><span className=' text-purple-800  font-semibold' >$</span>{serviceCharge}</p>
        <p>{description.slice(0,100)}</p>
        <div className="card-actions justify-end">
           <Link  to={`/service/${_id}`} >
               <button className="btn btn-outline btn-secondary">View Details <FaArrowRight className="text-orange-500"></FaArrowRight></button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
