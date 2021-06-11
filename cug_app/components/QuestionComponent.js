/* This component will be a smart component for displaying a list of questions
    in two column.
*/
import React, { useState } from "react";
import SearchBar from "./question/SearchBar";
import Question from "./Workflow/Question";
import { Switch } from "@headlessui/react";
import { MenuComponent, MyToggle } from "./question/menu/MenuComponent";

const QuestionComponent = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="order-1 mr-20">
          <MyToggle />
        </div>
        <div className="order-2">
          <SearchBar />
        </div>
        <div className="order-3">
          <div className="flex flex-col flex-wrap justify-between">
            <div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded">
                Ask Question
              </button>
            </div>
            <div>
              <MenuComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-6">
        {/* <div className="container "> */}
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        {/* <Question /> */}
        <Question />
        <Question />
        <Question />
        {/* </div> */}
      </div>
    </>
  );
};

export default QuestionComponent;
