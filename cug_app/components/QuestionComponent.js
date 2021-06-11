/* This component will be a smart component for displaying a list of questions
    in two column.
*/
import React, { useState } from "react";
import SearchBar from "./question/SearchBar";
import Question from "./Workflow/Question";
import { Switch } from "@headlessui/react";
import {
  MenuComponent,
  MyToggle,
  MyListbox,
  MyDropdown,
} from "./question/menu/MenuComponent";

const QuestionComponent = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between my-4">
        <div className="order-1 mr-20">
          <MyToggle />
        </div>
        <div className="order-2">
          <SearchBar />
        </div>
        <div className="order-3">
          <div className="flex flex-col flex-wrap justify-between">
            <div className="mb-2">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-6 border border-blue-500 hover:border-transparent rounded">
                Ask Question
              </button>
            </div>
            <div>
              <MyDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-6">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </>
  );
};

export default QuestionComponent;
