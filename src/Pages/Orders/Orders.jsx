import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import img from "../../assets/images/checkout/checkout.png";
import OrdersRow from "./OrdersRow";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="relative w-full h-80 mt-10  rounded-md">
        <div className="carousel-img">
          <img src={img} className="w-full h-80 rounded-md" alt="" />
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 top-1/2 ">
          <h1 className="text-6xl font-bold text-white ">Cart Details</h1>
          <p className="text-orange mt-3">Home - Product Details</p>
        </div>
      </div>

      {orders.length === 0 && (
        <div className="my-40">
          <p className="text-center font-bold text-5xl mb-4">
            No item ordered{" "}
          </p>
          <p>
            <Link to="/" className="link ml-[610px] hover:text-orange">
              Click here{" "}
              <FaLongArrowAltRight className="text-base -mt-4 ml-[680px]" />
            </Link>
          </p>
        </div>
      )}

      {orders.map((order) => (
        <OrdersRow
          key={order._id}
          setOrders={setOrders}
          orders={orders}
          order={order}
        />
      ))}
    </div>
  );
};

export default Orders;
