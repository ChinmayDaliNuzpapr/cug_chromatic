import React, { useState } from "react";

const ActiveCategory = () => (
  <>
    {["vas", "sav", "aaa"].map((item, i) => {
      return (
        <button
          key={i}
          className={classNames({ "color-red": per === item })}
          onClick={() => {
            setPer(item);
          }}
        >
          {item}
        </button>
      );
    })}
  </>
);
// active:bg-green-600

const activeString =
  "bg-green-500 border-green-500 hover:bg-blue-600 text-white shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-r-8 xl:opacity-75 mb-2 px-auto py-4 border-gray-900 hover:text-white hover:font-bold";
// bg-blue-300
const deactiveString =
  "mb-2 px-auto py-4 text-gray-900 border-gray-900 hover:bg-blue-600 hover:text-white hover:font-bold rounded rounded-lg";
const Sidebar = (props) => {
  const { category } = props;
  const [per, setPer] = useState("home");
  return (
    <>
      <div className="md:w-[150px] lg:w-[250px]">
        <nav className="flex flex-col w-64 h-screen px-auto tex-gray-900 border rounded-lg border-gray-200">
          <div className="flex flex-wrap bg-blue-300">
            <div className="w-1/2 justify-center my-4 mx-auto">
              <p className="text-3xl">Workspace</p>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="">
              {category.map((item, index) => {
                return (
                  <li
                    key={{ index }}
                    className={item === per ? activeString : deactiveString}
                    onClick={() => setPer(item)}
                  >
                    <div className="ml-4">
                      <span>{item}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
