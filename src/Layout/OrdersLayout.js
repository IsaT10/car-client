import React from "react";
import OrdersHeader from "../Pages/Shared/Header/OrdersHeader";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const OrdersLayout = () => {
  return (
    <div>
      <OrdersHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default OrdersLayout;
