import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ order, orders, setOrders }) => {
  const { serviceName, price, phone, service, _id } = order;
  console.log(orders);

  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you want to delete this order?");
    if (procced) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Successfully delete");
            const remainingOrders = orders.filter((ord) => ord._id !== _id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = orders.filter((odr) => odr._id !== id);
        const approving = orders.find((odr) => odr._id === id);

        approving.status = "Approved";
        const newOrders = [approving, ...remaining];
        setOrders(newOrders);
      });
  };

  return (
    <div className="flex items-center justify-between my-32">
      <div className=" flex items-center gap-8">
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="avatar">
          <div className="rounded-lg w-36 h-36">
            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <p className="text-darkGray font-semibold text-xl ">{serviceName}</p>
          <p className="text-gray">{phone}</p>
        </div>
      </div>
      <p className="text-darkGray font-semibold text-xl ">${price}</p>
      <p className="text-darkGray  text-xl ">22-02-08</p>
      {order?.status ? (
        <button className="border-2 border-green  px-5 py-2 text-xl text-green font-semibold rounded-md">
          Approved
        </button>
      ) : (
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="bg-orange px-5 py-2 text-xl text-white font-semibold rounded-md"
        >
          Pending
        </button>
      )}
    </div>
  );
};

export default OrdersRow;
