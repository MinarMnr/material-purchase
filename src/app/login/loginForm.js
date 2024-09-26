"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { callApi, selectApi } from "../reducers/apiSlice";
import { login } from "../reducers/store";
import axios from "axios";

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  //const { authData } = useSelector(selectApi);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(
          "https://devapi.propsoft.ai/api/interview/login",
          values
        );

        console.log("sad", response);

        if (response.status === 200) {
          const userData = { email: values.email, password: values.password };
          dispatch(login(userData));
          alert("Logged in successfully!");
        } else {
          setErrors({ email: "Invalid login credentials" });
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Failed to login");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
