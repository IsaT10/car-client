import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar h-20 bg-base-100 px-[121px] my-8">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-semibold">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/orders">Orders</Link>
              {user?.email ? (
                <Link onClick={handleLogOut} to="">
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img className="w-12 lg:w-24" src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center mr-44 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link to="">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/orders">Orders</Link>
            {user?.email ? (
              <Link onClick={handleLogOut}>Logout</Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex gap-6 mr-8 text-xl font-bold">
          <BsHandbag />
          <BsSearch />
        </div>
        <button className="border-2 border-orange px-4 lg:px-7 py-2 lg:py-4 rounded-md text-base lg:text-lg text-orange font-bold">
          Appoinment
        </button>
        {user && (
          <div className="avatar">
            <div className="w-14 rounded-full ml-4">
              <img src={user?.photoURL} alt={user?.name} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
