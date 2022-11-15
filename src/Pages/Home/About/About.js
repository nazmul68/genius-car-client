import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="md:w-1/2 relative">
            <img
              alt="person"
              src={person}
              className="max-w-lg rounded-lg shadow-2xl w-3/4 "
            />
            <img
              alt="parts"
              src={parts}
              className="max-w-sm rounded-lg shadow-2xl absolute w-1/2 right-5 top-1/2 border border-white"
            />
          </div>
          <div className="md:w-1/2 mt-10 ">
            <h1 className="font-bold text-orange-600 mb-5">About Us</h1>
            <h1 className="text-5xl font-bold ">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-warning hover:bg-black text-white font-bold">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
