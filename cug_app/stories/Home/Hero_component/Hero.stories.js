import React from "react";
import Hero from "./Hero";

//default export
export default {
  title: "Home/Hero", //
  component: Hero,
};

//named export for variations
export const Component_Hero = () => <Hero />;
