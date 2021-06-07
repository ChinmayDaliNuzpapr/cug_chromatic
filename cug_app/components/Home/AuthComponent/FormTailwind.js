import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const FormTailwind = () => {
  return (
    <div>
      <div className="w-full max-w-xs my-16">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 charaters")
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Password must match")
              .required("Confirm password is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <div className="mb-4 py-16">
            <label
              className="block text-gray-700 text-2xl font-bold my-4"
              htmlform="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6 py-16">
            <label
              className="block text-gray-700 text-2xl font-bold my-4"
              htmlform="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between py-16">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </Formik>
        {/* <form className="bg-white shadow-md rounded px-8 mb-4 py-16"></form> */}
      </div>
    </div>
  );
};

export default FormTailwind;
