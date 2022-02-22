import { NavLink } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
      <div className="relative">
        <NavLink to="/" className={"absolute text-lg right-20 top-0"}>
          LogOut
        </NavLink>
      </div>
      <div className="text-4xl font-bold text-red-600 m-20">Welcome !!!</div>
    </>
  );
};

export default DashBoard;
