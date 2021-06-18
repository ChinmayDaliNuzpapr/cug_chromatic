/* In this component we will initially fetch latest 10 questions of the home-category
 we will create a context-hook to serve all the questions or new queries based on sort-by
 when someone clicks on different category on the left side:-
  👉 we will create a global store here where the latest fetched 10 questions will be stored.
  👉 we will create a global store for list of category
  👉 we will also store the links of top 10 trending question pertaining to that group
// Incorrect thought process👇
 🚩 we will use useCallback but one failure would be this will query uncessarily the same 10 question over and over
*/
import React, { useState, useEffect, useContext, createContext } from "react";
import BoxComponent from "../../components/question/BoxComponent";
import QuestionCard from "../../components/QuestionCard";
import CreateQuestionForm from "../../components/question/article/CreateQuestionForm";
import QuestionComponent from "../../components/QuestionComponent";
import Sidebar from "../../components/Workflow/Sidebar";
import { Trending, ExtraTrendingBox } from "../../components/Workflow/Trending";
import { useRouter } from "next/router";
import { UserContext, MainDataContext } from "../../components/Layout";
// import styles from "./sidebar.module.css";
// import Layout from "../../components/question/Layout";
// import axios from "axios";

// The local-state of the question will have
/**
 * List of Questions
 * state about any kind of searched/filtered array [Assuming the user navigates to a particular question-id then they want to see the list of question they searched]
 * If in "Home" category then a list of trending questions
 * state of scope [global or company]
 */

const index = () => {
  const { authenticated } = useContext(UserContext);
  const { fetchedData } = useContext(MainDataContext);

  const [selectedQuestion, setselectedQuestion] = useState(null);
  const [askQuestion, setAskQuestion] = useState(false);

  const router = useRouter();
  // -----------------------------------------------------------------------------------
  /* [📌] The below code is commented for developement purposes. 
    // The below effect will only run if the user has logged out
    // useEffect(() => {
    //   if (
    //     localStorage.getItem("jwt_token") === null &&
    //     authenticated.token !== localStorage.getItem("jwt_token")
    //   ) {
    //     router.push("/");
    //   }
    // }, [authenticated]);
  */
  // -----------------------------------------------------------------------------------
  // useEffect(() => {

  //       setCategory({
  //         category_list: res.data.categories,
  //         current_category: res.data.categories[0]._id,
  //       });
  // },[])

  return (
    <>
      <BoxComponent />
      {/* <QuestionComponent/> */}
    </>
  );
};

export default index;

const DetailQuestionComponent = <div>DETAILS OF A QUESTION</div>;

/*
<>
                    <BoxComponent />
                    <QuestionComponent
                      setselectedQuestion={setselectedQuestion}
                      askQuestion_func={setAskQuestion}
                      listOfQuestions={fetchedData.questions}
                    />
                  </>

*/
