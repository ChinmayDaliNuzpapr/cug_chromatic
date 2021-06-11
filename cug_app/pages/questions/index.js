/* In this component we will initially fetch latest 10 questions of the home-category
 we will create a context-hook to serve all the questions or new queries based on sort-by
 when someone clicks on different category on the left side:-
  👉 we will create a global store here where the latest fetched 10 questions will be stored.
  👉 we will create a global store for list of category
  👉 we will also store the links of top 10 trending question pertaining to that group
// Incorrect thought process👇
 🚩 we will use useCallback but one failure would be this will query uncessarily the same 10 question over and over
*/
import React, { useState, useEffect, useContext } from "react";
import BoxComponent from "../../components/question/BoxComponent";
import QuestionCard from "../../components/QuestionCard";
import QuestionComponent from "../../components/QuestionComponent";
import Sidebar from "../../components/Workflow/Sidebar";
import Trending from "../../components/Workflow/Trending";
import { useRouter } from "next/router";
import { UserContext } from "../../components/Layout";

const index = () => {
  const [category, setCategory] = useState("home");
  const { authenticated } = useContext(UserContext);
  const router = useRouter();
  // The below effect will only run if the user has logged out
  // useEffect(() => {
  //   if (authenticated === null) {
  //     router.push("/");
  //   }
  // }, [authenticated]);

  // const [];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col my-16">
        <div className="flex flex-row">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            {/* flex-grow */}
            <Sidebar />
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <BoxComponent />
            <QuestionComponent />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            {/* flex-grow */}
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

/*


*/
