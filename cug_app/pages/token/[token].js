import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../components/Layout";

const AuthConfirmComponent = ({ token_val, user_id }) => (
  <div className="flex flex-row h-screen">
    {/* The left side image */}
    <div className="w-1/5">
      <div className="flex flex-col">
        <img className="h-screen image_full_screen" src="/sidebar_image.jpeg" />
      </div>
    </div>
    <div className="flex-grow">
      <div className="grid grid-col-1 content-evenly gap-4">
        {console.log("THE TOKEN ----> ", token_val)}
        <span className="text-2xl">You have been authenticated</span>
        <span className="">Your user id: {user_id}</span>
      </div>
    </div>
  </div>
);
const TokenComponent = (props) => {
  // const [token, setToken] = useState(null);
  const { authenticated, setAuthenticated } = useContext(UserContext);
  const { query } = useRouter();
  const router = useRouter();
  console.log("THE PROPS", props);

  if (query.token) {
    console.log("THE QUERY", query.token);
    localStorage.setItem("token", query.token);
    setAuthenticated(query.token);
    // return router.push("http://localhost:3000/questions");
  }
  useEffect(() => {
    console.log("THE USE EFFECT RAN", authenticated);
    if (localStorage.getItem("token")) {
      // localStorage.setItem("token", query.token);
      return router.push("http://localhost:3000/questions");
    }
  }, [authenticated]);

  return (
    <div>
      <AuthConfirmComponent token_val={{ authenticated }} />
    </div>
  );
};

export default TokenComponent;
