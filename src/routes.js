import React from "react";
import { Navigate } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Login from "./components/Login/Login";

const routes = () => [
  {
    path: "/",
    element: <Login />,
    children: [
      { path: "404", element: <Navigate to="/404" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "user",
    element: <DashBoard />,
  },
];

export default routes;
