import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(authContext);
  //   const service = useLoaderData();
  //   const { title } = service;
  const { _id, title, price } = useLoaderData();

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.FirstName.value} ${form.LastName.value}`;
    const email = user?.email || "unregisterd";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    if (phone.length < 10) {
      alert("please give a valid phone number");
    }
    //
    else {
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            alert("Order Placed Successfully");
            form.reset();
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-orange-600 text-4xl">
        service name: {title}
      </h1>
      <form
        onSubmit={handlePlaceOrder}
        className=" bg-base-300 my-20 w-4/5 mx-auto py-20 rounded-lg "
      >
        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full">
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
            required
          />
          <input
            type="Phone"
            placeholder="Phone"
            name="phone"
            className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
            required
          />
          <input
            type="email"
            placeholder={`${user?.email}`}
            name="email"
            className="input input-bordered input-accent w-full max-w-xs mx-auto m-5"
            readOnly
          />
        </div>
        <div className=" w-4/5 mx-auto">
          <textarea
            className="textarea textarea-success w-full my-5 py-10"
            placeholder="Your message"
            name="message"
          ></textarea>
          <br />
          <input
            type="submit"
            value="confirm order "
            className="bg-warning cursor-pointer font-semibold text-white p-3 rounded w-full my-5 "
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
