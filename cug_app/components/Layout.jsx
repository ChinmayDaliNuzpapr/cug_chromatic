import React, { useState, createContext } from "react";
import Navbar from "../components/navbar/navbar";
import FooterPage from "../components/FooterPage";

export const UserContext = createContext(null);

const Layout = ({ children }) => {
  console.log("THE LAYOUT COMPONENT");
  console.log("THE CHILD", children);
  const [authenticated, setAuthenticated] = useState(null);
  console.log("THE AUTHENTICATED", authenticated);
  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated }}>
      <div id="base_layout">
        <div id="layout_navbar_div2" className="sticky top-0 bg-white z-50">
          <Navbar />
        </div>

        <div>{children}</div>
        <div id="layout_footer_div">
          <FooterPage />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
