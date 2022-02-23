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
      <div className="relative">
        <button
          onClick={OnClickLogOut}
          className={"absolute text-lg right-20 top-0"}
        >
          LogOut
        </button>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
