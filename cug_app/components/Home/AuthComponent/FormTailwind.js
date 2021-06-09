import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { TextField } from "./TextField.js";
import LoginForm from "./FormComponent.js";
const FormTailwind = () => {
  const router = useRouter();

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const [authenticated, setAuthenticated] = useState(null);

  const Login = (details) => {
    console.log(details);

    var objectWithData = { Group_name: "", email: "" };
    objectWithData.Group_name = details.group_name;
    objectWithData.email = details.email;
    console.log("THE OBJECT WITH DATA", objectWithData);
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectWithData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("THE RESPONSE", data);
        setAuthenticated(true);
      })
      .catch((err) => {
        setAuthenticated(false);
        alert("ERROR");
      });

    console.log("AFTER AUTHENTICATION");
  };

  useEffect(() => {
    if (authenticated === true) {
      router.push("/verification");
      toast.success("Sent an email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (authenticated === false) {
      toast.error("ERROR ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else;
  }, [authenticated]);

  return (
    <div>
      {/* 📌THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
      <div className="w-full max-w-xs my-16">
        {/* <div>
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
        </div> */}
        {/* 🔴THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
        <Formik
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
            Login(values);
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              resetForm();

              setSubmitting(false);
            }, 3000);
          }}
        >
          {(props) => (
            <Form className="bg-white shadow-md rounded px-8 mb-4 py-16">
              <span className="text-4xl">Authentication</span>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormTailwind;
