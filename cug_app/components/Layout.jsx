import React from "react";
import Navbar from "../components/navbar/navbar";
import FooterPage from "../components/FooterPage";
const Layout = ({ children }) => {
  console.log("THE CHILD", children);
  return (
    <div id="base_layout">
      <div id="layout_navbar_div" className="sticky top-0">
        <Navbar />
      </div>

      <div>{children}</div>
      <div id="layout_footer_div">
        <FooterPage />
      </div>
    </div>
  );
};

export default Layout;
