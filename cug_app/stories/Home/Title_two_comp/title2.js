import React from "react";
import image from "../../../public/GetImage.gif";
import category_image from "../../../public/category_placeholder.svg";
const title2 = () => {
  return (
    <div className="title2_css ">
      <div className="grid grid-cols-2 gap-4">
        {/* Column-1 */}
        <div className="flex flex-col p-2 justify-end">
          {/* Single sub-coloumn */}
          <div className="p-10">
            {/* Row-1 */}
            <div className="flex flex-row justify-center space-x-10">
              {/* Two cards will be side-by-side */}
              {/* CARD-1 */}
              <div
                id="app"
                className="bg-white w-full h-60 rounded flex items-center card"
              >
                <img
                  // className="w-1/2 rounded-l-sm"
                  width="90"
                  height="60"
                  src={category_image}
                  alt="Room Image"
                />
                <div className="w-full flex flex-col">
                  <div className="p-4 pb-0 flex-1">
                    <span className="text-4xl text-grey-darkest">Title-1</span>
                    <br />
                    <h3 className="font-light mb-1 text-grey-darkest">
                      sub-title
                    </h3>
                  </div>
                </div>
              </div>
              {/* CARD-2 */}
              <div
                id="app"
                className="bg-white w-full h-60 rounded flex items-center card"
              >
                <img
                  // className="w-1/2 rounded-l-sm"
                  width="90"
                  height="60"
                  src={category_image}
                  alt="Room Image"
                />
                <div className="w-full flex flex-col">
                  <div className="p-4 pb-0 flex-1">
                    <span className="text-4xl text-grey-darkest">Title-1</span>
                    <br />
                    <h3 className="font-light mb-1 text-grey-darkest">
                      sub-title
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Column-2 */}
        <div className="p-2">
          <img alt="the_it_guy" src={image} />
        </div>
      </div>
    </div>
  );
};

export default title2;
