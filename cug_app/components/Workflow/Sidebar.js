import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MainDataContext } from "../../components/Layout";

const activeString =
  "bg-green-500 border-green-500 hover:bg-blue-600 text-white shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-r-8 xl:opacity-75 mb-2 px-auto py-4 border-gray-900 hover:text-white hover:font-bold";
// bg-blue-300
const deactiveString =
  "mb-2 px-auto py-4 text-gray-900 border-gray-900 hover:bg-blue-600 hover:text-white hover:font-bold rounded rounded-lg";
const Sidebar = (props) => {
  const { fetchedData, setFetchedData } = useContext(MainDataContext);
  function fetchingDataOfNewCategory(category_id) {
    console.log("THE ID", category_id);
    axios
      .get(
        `http://localhost:3000/api/question/category`,
        { category: category_id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      )
      .then((res) => {
        console.log("THE RES Data", res);
        // setFetchedData({
        //   category: {
        //     category_list: res.data.categories,
        //     current_category: res.data.categories[0]._id,
        //   },
        //   questions: res.data.questions,
        //   group_data: res.data.currentGroup,
        // });
        localStorage.setItem("group_id", res.data.currentGroup._id);
      })
      .catch((err) => console.log("😈😈😈😈", err));
  }

  // console.log("THE PROPS of CATEGORY", props);
  // const { category, category_func } = props;

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
              {fetchedData.category.category_list &&
                fetchedData.category.category_list.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        item._id === fetchedData.category.current_category
                          ? activeString
                          : deactiveString
                      }
                      onClick={() => {
                        console.log("THE CATEGORY ID", item._id);
                        fetchingDataOfNewCategory(item._id);
                      }}
                    >
                      <div className="ml-4">
                        <span>{item.categoryName}</span>
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
