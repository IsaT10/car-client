import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import AuthLayout from "../../Layout/AuthLayout";
import OurServices from "../../Pages/OurServices/OurServices";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Orders from "../../Pages/Orders/Orders";
import OrdersLayout from "../../Layout/OrdersLayout";
import OrdersReview from "../../Pages/Orders/OrdersReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: <OrdersLayout />,
    children: [
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
      { path: "/ordersreview", element: <OrdersReview /> },
    ],
  },
]);
