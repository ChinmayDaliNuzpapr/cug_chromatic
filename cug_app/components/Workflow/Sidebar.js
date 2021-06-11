import React from "react";

const Sidebar = () => {
  return (
    <>
      <div>
        <nav className="flex flex-col w-64 h-screen px-auto tex-gray-900 border rounded-lg border-gray-200">
          <div className="flex flex-wrap mt-8 mx-auto">
            <div className="w-1/2 justify-center">
              <p className="text-3xl">
                Question & Answer <br></br>Work spaces
              </p>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="">
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Home</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category1</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category2</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category3</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category4</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category5</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category6</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Category7</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
