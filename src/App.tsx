import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "./routes";

function App() {
  //const navigate = useNavigate();
  const routing = useRoutes(routes());
  return <div className="App">{routing}</div>;
}

export default App;
