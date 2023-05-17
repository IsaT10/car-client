import React from "react";
import Header2 from "../Pages/Shared/Header/Header2";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
