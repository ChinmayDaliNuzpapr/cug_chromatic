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
import { UserContext } from "../../components/Layout";
import styles from "./sidebar.module.css";
import Layout from "../../components/question/Layout";
import axios from "axios";

export const MainDataContext = createContext(null);

/*
{
    current_category: "home",
    category_list: [
      "home",
      "category 1",
      "category 2",
      "category 3",
      "category 4",
      "category 5",
      "category 6",
      "category 7",
      "category 8",
      "category 9",
      "category 10",
      "category 11",
      "category 12",
      "category 13",
    ],
  }
*/

const index = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedQuestion, setselectedQuestion] = useState(null);
  const [askQuestion, setAskQuestion] = useState(false);
  console.log("THE LOCAL STATE MAIN DATA", fetchedData);
  const { authenticated } = useContext(UserContext);
  const router = useRouter();
  console.log("THE Authentication", authenticated);
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

  // useEffect(() => {
  //   console.log("THE 👉👉👉", authenticated);
  //   if (
  //     authenticated !== null &&
  //     authenticated.token === localStorage.getItem("jwt_token")
  //   ) {
  //     axios
  //       .get(`http://localhost:3000/api/question/all`, {
  //         headers: {
  //           Authorization: `Bearer ${authenticated.token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log("THE RES Data", res);
  //         setFetchedData({
  //           category: {
  //             category_list: res.data.categories,
  //             current_category: res.data.categories[0]._id,
  //           },
  //           questions: res.data.questions,
  //           group_data: res.data.currentGroup,
  //         });
  //         // setCategory({
  //         //   current_category: res.data.categories[0].categoryName,
  //         //   category_list: res.data.categories,
  //         // });
  //         // setselectedQuestion(res.data.questions);
  //         // localStorage.setItem("group_id", res.data.currentGroup._id);
  //       })
  //       .catch((err) => alert(err));
  //   }
  // }, [authenticated]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/question/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((res) => {
        console.log("THE RES Data", res);
        setFetchedData({
          category: {
            category_list: res.data.categories,
            current_category: res.data.categories[0]._id,
          },
          questions: res.data.questions,
          group_data: res.data.currentGroup,
        });
        setCategory({
          category_list: res.data.categories,
          current_category: res.data.categories[0]._id,
        });
        // setCategory({
        //   current_category: res.data.categories[0].categoryName,
        //   category_list: res.data.categories,
        // });
        // setselectedQuestion(res.data.questions);
        // localStorage.setItem("group_id", res.data.currentGroup._id);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <MainDataContext.Provider value={{ fetchedData, setFetchedData }}>
      <p>ALL THE VALUES </p>
      <div className="container mx-auto">
        <div className="flex flex-col my-16">
          <div className="flex flex-row">
            <div className="hidden md:block">
              <div
                id="sidebar_div"
                className="md:w-full md:w-1/2 lg:w-1/4 px-2 mb-4"
              >
                {fetchedData !== null && category !== null && (
                  <Sidebar
                    // category={fetchedData.category}
                    category={category}
                    category_func={setCategory}
                  />
                )}
              </div>
            </div>
            <div className="flex-grow w-full lg:w-1/2 px-2">
              {fetchedData !== null ? (
                fetchedData.questions && (
                  <>
                    <BoxComponent />
                    <QuestionComponent
                      setselectedQuestion={setselectedQuestion}
                      askQuestion_func={setAskQuestion}
                    />
                  </>
                )
              ) : selectedQuestion === true ? (
                <>
                  <DetailQuestionComponent />
                </>
              ) : (
                <></>
              )}
              {askQuestion === true ? (
                <>
                  <CreateQuestionForm />
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="sr-only w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <ExtraTrendingBox />
            </div>
          </div>
        </div>
      </div>
    </MainDataContext.Provider>
  );
};

export default index;

const DetailQuestionComponent = <div>DETAILS OF A QUESTION</div>;
