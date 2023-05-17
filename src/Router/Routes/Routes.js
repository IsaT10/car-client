import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import AuthLayout from "../../Layout/AuthLayout";
import OurServices from "../../Pages/OurServices/OurServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      // {
      //   path: "/services",
      //   element: <OurServices />,
      // },
    ],
  },
  // {
  //   path: "/signup",
  //   element: <AuthLayout />,
  //   children: [
  //     { path: "/signup", element: <SignUp /> },
  //     // { path: "/login", element: <Login /> },
  //   ],
  // },
]);
