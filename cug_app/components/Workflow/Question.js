import React, { useState, useEffect, useContext, createContext } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { MainDataContext } from "../../components/Layout";
import Link from "next/link";

function convertingDateValue(createdAt) {
  let result = moment(createdAt).fromNow(true);
  return result;
}

function findTheCategory(category_list, category_name) {
  let x = category_list.map((item) => {
    if (item._id === category_name) {
      return item.categoryName;
    }
  });
  return x;
}

const Question = (props) => {
  const { fetchedData } = useContext(MainDataContext);
  console.log("THE MAIN DATA in Question Component", fetchedData);
  return (
    <div
      className="w-full relative  border-2 rounded-md mx-auto"
      // onClick={() => router.push("/questions/1254")}
    >
      <div className="-top-0 flex flex-row justify-between">
        <div className=" -left-0 bg-blue-300 w-[150px] text-left">
          <span style={{ padding: "8px" }}>
            {fetchedData &&
              findTheCategory(
                fetchedData.category.category_list,
                props.data.category
              )}
          </span>
        </div>
        <div className="-right-0 w-[150px] text-right">
          <span style={{ padding: "8px" }}>
            {console.log("THE PROPS CREATED", props.data.article.createdAt)}
            {/* convertingDateValue(props.data.article.createdAt) */}
            {fetchedData && (
              <>{convertingDateValue(props.data.article.createdAt)}</>
            )}
          </span>
        </div>
      </div>

      <div className="p-3">
        <p className="sm:text-base md:text-xl text-gray-900">
          {props.data.article.title}
        </p>
        <p className="md:text-base text-gray-500">
          2 lines of question is quoted in 2 point small font than font used in
          question and 3 dots added …
        </p>
        <div className="px-6 py-4">
          {props.data.tags.map((item, index) => (
            <React.Fragment key={index}>
              <span className="inline-block bg-gray-300 px-3 py-2 text-sm font-semibold mr-2 text-gray-700 rounded-full">
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
        <p className="text-sm my-2">
          Posted by: {props.data ? <>{props.data.article.author}</> : <></>}{" "}
          <br />
        </p>
        <div className="flex justify-between text-sm ">
          <div className="grid grid-cols-3">
            <div className="flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="margin_auto">
                {/* When the sort-API is running */}
                {props.data.article &&
                typeof props.data.article.view !== undefined ? (
                  <>{props.data.article.view}</>
                ) : // {/* When the category-API is running */}
                props.data.view ? (
                  <>{props.data.view}</>
                ) : (
                  // When either of the API dont return anything we call it zero
                  <>0</>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <div className="margin_auto">
                {typeof props.data.article.like === undefined ? (
                  <></>
                ) : (
                  <>{props.data.article.like}</>
                )}
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div className="margin_auto">
                {props.data.comments ? <>props.data.comments</> : <>0</>}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div>
              <div className="w-[20px] h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
