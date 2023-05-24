import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserAlt, FaRegUserCircle } from "react-icons/fa";

const OrdersHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar lg:px-[121px] h-20 bg-base-100 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-semibold ">
              <Link to="/orders">Order</Link>
              <Link to="/ordersreview">Order review</Link>
              <Link to="/services">Manage Inventory</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img className="w-24" src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-6 text-lg">
          <li className="font-semibold hover:text-orange duration-100 ">
            <Link to="/orders">Order</Link>
          </li>
          <li className="font-semibold hover:text-orange duration-100 ">
            <Link to="/ordersreview">Order review</Link>
          </li>
          <li className="font-semibold hover:text-orange duration-100 ">
            <Link to="/services">Manage Inventory</Link>
          </li>
        </ul>
        {user?.photoURL ? (
          <div className="avatar ml-4 mr-6">
            <div className="w-10 rounded-full ml-4">
              <img src={user?.photoURL} alt={user?.name} />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-12 pt-[15px] pl-1 rounded-full ml-4">
              <FaRegUserCircle className="text-xl" />
            </div>
          </div>
        )}
        <div className="hidden lg:flex gap-6  text-xl font-bold">
          <BsSearch />
          <BsHandbag />
        </div>
      </div>
    </div>
  );
};

export default OrdersHeader;
