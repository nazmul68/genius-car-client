import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState([true]);
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?order=${
        isAsc ? "asc" : "desc"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isAsc, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  return (
    <div>
      <div className="text-center mb-4 ">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="w-3/5 py-2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* for serarch */}
      {/* <form> */}
      <input
        ref={searchRef}
        type="text"
        placeholder="search by service name"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      <button onClick={handleSearch} className="btn btn-accent mx-5">
        serarch
      </button>
      {/* </form> */}

      {/* for asc & desc  */}
      <button
        onClick={() => {
          setIsAsc(!isAsc);
        }}
        className="btn btn-info flex justify-center mt-5"
      >
        {isAsc ? "ascending" : "descending"}
      </button>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
