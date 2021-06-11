import React from "react";
import Button from "../Button/Button";
const Trending = () => {
  return (
    <>
      <div>
        <nav className="flex flex-col w-64 h-screen px-auto tex-gray-900 border rounded-lg border-gray-200">
          <div className="flex flex-wrap mt-8 mx-auto">
            <div className="w-1/2 justify-center">
              <p className="text-3xl">Trending</p>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="">
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Trending;
