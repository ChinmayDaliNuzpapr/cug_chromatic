/* -------------------------------------------------
Since we want to store the data regarding category 
between different page renders we will create a context for that.
  
*/
import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../components/navbar/navbar";
import FooterPage from "../components/FooterPage";
import Sidebar from "../components/Workflow/Sidebar";
const whiteListForSidebar = ["/questions/[question_id]", "/questions"];

export const UserContext = createContext(null);
export const MainDataContext = createContext(null);
const Layout = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  const [category, setCategory] = useState(null);
  const router = useRouter();
  console.log("router ----->", router);
  //[📌] Everytime the category changes we need to fetch a new set of questions
  useEffect(() => {
    console.log("THE FIRST USE_EFFECT WITH NO PARAMETERS");
    axios
      .get(`http://localhost:3000/api/question/category`, {
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
          current_category: res.data.categories[0]._id,
          category_list: res.data.categories,
        });
        localStorage.setItem("group_id", res.data.currentGroup._id);
      })
      .catch((err) => alert(err));
  }, []);
  //[📌] Everytime the new data is fetched we need to update category state.
  // useEffect(() => {
  //   if (
  //     fetchedData &&
  //     fetchedData.category.current_category !== category.current_category
  //   ) {
  //     axios.get(
  //       `http://localhost:3000/api/question/category`,
  //       { category: category },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
  //         },
  //       }
  //     );
  //     setCategory({
  //       current_category: fetchedData.category.current_category,
  //       category_list: fetchedData.category.category_list,
  //     });
  //   }
  // }, [category]);

  console.log("THE STATE IN THE BASE LAYOUT", fetchedData);
  console.log("THE STATE IN THE BASE LAYOUT", authenticated);
  console.log("THE STATE IN THE BASE LAYOUT", category);
  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated }}>
      <MainDataContext.Provider value={{ fetchedData, setFetchedData }}>
        <div id="base_layout">
          <div id="layout_navbar_div2" className="sticky top-0 bg-white z-50">
            <Navbar />
          </div>
          <div>
            {whiteListForSidebar.includes(`${router.pathname}`) ? (
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
                            category={category}
                            category_func={setCategory}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-grow w-full lg:w-1/2 px-2">
                      <React.Fragment>{children}</React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <React.Fragment>{children}</React.Fragment>
              </>
            )}
          </div>
          <div id="layout_footer_div">
            <FooterPage />
          </div>
        </div>
      </MainDataContext.Provider>
    </UserContext.Provider>
  );
};

export default Layout;
