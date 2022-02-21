import React from "react";
import { Navigate } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";

const routes = () => [
  {
    path: "/",
    element: <DashBoard />,
  },
];

export default routes;
