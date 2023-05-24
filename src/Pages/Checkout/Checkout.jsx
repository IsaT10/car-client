import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  //   console.log(service);
  const { user } = useContext(AuthContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "unregisterd";
    const message = form.message.value;
    // console.log(name, message);

    const order = {
      service: _id,
      price,
      serviceName: title,
      customer: name,
      phone,
      email,
      message,
    };
    // console.log(order);

    //validation

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative w-full h-80 mt-10  rounded-md">
        <div className="carousel-img">
          <img src={img} className="w-full h-80 rounded-md" alt="" />
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 top-1/2 ">
          <h1 className="text-6xl font-bold text-white ">Checkh Out</h1>
        </div>
        <p className="absolute top-[268px] right-[500px] bg-orange text-white text-xl rounded-tr-full rounded-tl-full  font-semibold inline-block px-16 py-3">
          Home/Checkout
        </p>
      </div>

      <form
        onSubmit={handleCheckout}
        className="bg-lightGray px-24 py-24 my-32 rounded-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input w-full h-[60px] px-6 "
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input w-full h-[60px] px-6 "
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input w-full h-[60px] px-6 "
            required
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input w-full h-[60px] px-6"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea w-full h-80 mt-6 p-6"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="mt-6 bg-orange w-full py-4 text-xl rounded-md text-white font-semibold  "
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default Checkout;
