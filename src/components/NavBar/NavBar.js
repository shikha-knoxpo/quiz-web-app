import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAccessToken } from "../Login/state/reducer";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const OnClickLogOut = () => {
    dispatch(clearAccessToken(null));
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="flex justify-end">
        <button onClick={OnClickLogOut} className={"m-20 text-2xl"}>
          LogOut
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
