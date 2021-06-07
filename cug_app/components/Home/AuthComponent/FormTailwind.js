import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField.js";
import LoginForm from "./FormComponent.js";
const FormTailwind = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details did not matched!!!");
      setError("Details did not matched!!!");
    }
  };

  const Logout = () => {
    console.log("LOGOUT");
    setUser({ name: "", email: "" });
  };

  const submitFunc = (e) => {
    e.preventDefault();
    console.log("VALUES", e.target.values);
  };
  return (
    <div>
      {/* 📌THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
      <div className="w-full max-w-xs my-16">
        <div>
          {user.email != "" ? (
            <div className="welcome">
              <h2>
                Welcome, <span>{user.name}</span>
              </h2>
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <LoginForm Login={Login} error={error} />
          )}
        </div>
        {/* 🔴THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
        {/* <Formik
          initialValues={{ email: "", group_name: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            group_name: Yup.string()
              .max(20, "Group name is invalid")
              .required("Group name is required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("ALL THE VALUES", values);
            setTimeout(() => {
              alert(JSON.stringify(value, null, 2));
              // resetForm();
              setSubmitting(false);
            }, 3000);
          }}
        >
          {(props) => (
            <form
              onSubmit={submitFunc}
              className="bg-white shadow-md rounded px-8 mb-4 py-16"
            >
              <span className="text-4xl">Sign In</span>
              <div className="mb-4 ">
                <TextField label="Email" name="email" type="email" />
              </div>
              <div className="mb-6 ">
                <TextField label="group_name" name="group_name" type="text" />
              </div>
              <div className="flex items-center justify-between ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {props.isSubmitting ? `Loading...` : "submit"}
                </button>
              </div>
            </form>
          )}
        </Formik> */}
      </div>
    </div>
  );
};

export default FormTailwind;
