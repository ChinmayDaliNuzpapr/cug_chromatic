import React from "react";
import Navbar from "./navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

function NavbarStories(args) {
  return (
    <div>
      <Navbar val={args} />
    </div>
  );
}

export const Primary = NavbarStories.bind({});
Primary.args = {
  primary: true,
  label: "navbar",
};

export const Secondary = NavbarStories.bind({});
Secondary.args = {
  label: "navbar",
};

export const Large = NavbarStories.bind({});
Large.args = {
  size: "large",
  label: "navbar",
};

export const Small = NavbarStories.bind({});
Small.args = {
  size: "small",
  label: "navbar",
};
