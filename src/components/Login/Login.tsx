import { Formik } from "formik";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileModel } from "./state/models";
import { Resource } from "../../redux/models";
import { getUserProfileAction } from "./state/reducer";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const state: Resource<UserProfileModel> = useSelector<
    any,
    Resource<UserProfileModel>
  >((state) => {
    return state.user;
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(
        getUserProfileAction({
          emailID: formik.values.email,
          password: formik.values.password,
        })
      );
      //navigate("/user", { replace: true });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="text-4xl">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className="border-2 text-left"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className="border-2 text-left"
      />
      <br />
      <button type="submit" className="border-2">
        Submit
      </button>
    </form>
  );
};

export default Login;
