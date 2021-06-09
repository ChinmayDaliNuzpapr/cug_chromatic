/* This component will be a smart component for displaying a list of questions
    in two column.
*/
import React from "react";
import SearchBar from "./question/SearchBar";
import Question from "./Workflow/Question";

const QuestionComponent = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between">
        {/* <div> */}
        <SearchBar />
        {/* </div> */}

        <div>
          <span>Sortby section</span>
          <span>Ask A Question</span>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-4">
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
      </div>
    </>
  );
};

export default QuestionComponent;
