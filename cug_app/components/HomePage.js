import React from "react";
import Hero from "./Home/Hero_component/Hero";
import Footer from "./Home/Screen1_Footer/Footer";
import Screen3 from "./Home/Screen3/Screen3";
function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Footer />
      <Screen3 />
    </div>
  );
}

export default HomePage;
