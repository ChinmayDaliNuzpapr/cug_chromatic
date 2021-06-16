import React, { useState, useEffect } from "react";

import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// Custom component for forms
import { TextField, SelectField } from "../../Home/AuthComponent/TextField.js";
import { MyToggle } from "../menu/MenuComponent";
// All the textEditor Component I built
// import TextEditor from "./TextEditor";
// import NewTextEditor from "./NewTextEditor";
// import CompatibleTextEditor from "./CompatibleTextEditor";
// import { QuillNoSSRWrapper } from "./TextEditorForNextjs";
//👉The only working Editor
import QuillEditor from "../../Workflow/QuillEditor";

const category_list = [
  "home",
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
  "Category 8",
  "Category 9",
  "Category 10",
  "Category 11",
  "Category 12",
  "Category 13",
];
// ===============================================
/*                      🌟NOTES:🌟
    - initially I have to fetch list of all the unique tags
      Get the property of category from the base component and
      set it as the active category 
    -
*/
// ===============================================

const CreateQuestionForm = (props) => {
  const [post, setPost] = useState({ response_value: "", posted: null });
  const [editorHtml, setEditorHtml] = useState(null);
  console.log("THE VALUES IN THE EDITOR", editorHtml);
  const handleChange = (html) => {
    console.log("THE STATE", editorHtml);
    setEditorHtml(html);
  };

  const postAQuestion = (details) => {
    console.log("THE OBJECT WITH DATA", details);
    console.log("THE EDITOR VALUE", editorHtml);
    // console.log("THE EDITOR VALUE", editorHtml.current.innerHTML);
    details = { ...details, content: editorHtml };
    let postBody = {
      category: details.category,
      article: {
        title: details.title,
        author: "Chinmay",
        content: editorHtml.current.innerHTML,
        scope: details.scope,
      },
      tags: details.tags,
    };
    // postBody = JSON.stringify(postBody);
    console.log("THE FINAL DETAILS", postBody);
    // THE AXIOS REQUEST
    axios
      .post("http://localhost:3000/api/question/post", postBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      })
      .then((response) => {
        console.log("THE RESPONSE", response);
        setPost({ posted: true, response_value: response.data.message });
      })
      .catch((err) => {
        console.log("🧨🧨🧨🧨", err);
        console.log(JSON.stringify(err));
        console.log(err.response);
        setPost({ posted: false, response_value: err.response.message });
      });
  };

  useEffect(() => {
    if (post.posted === true) {
      // router.push("/verification");
      toast.success(`${post.response_value}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (post.posted === false) {
      toast.error(`${post.response_value}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else;
  }, [post]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col my-16">
        <div className="py-12 px-4">
          <div className="w-full mx-auto sm:px-12 lg:px-8">
            <div className="bg-white overflow-hidden shadow-xl rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <Formik
                  initialValues={{
                    title: "",
                    author: "",
                    scope: "",
                    tags: [],
                    category: "",
                  }}
                  // validationSchema={Yup.object({
                  //   title: Yup.string()
                  //     .max(100, "Title is required")
                  //     .required("Title is required"),
                  //   content: Yup.string().required("Content is required"),
                  //   author: Yup.string().required("ID"),
                  // })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("ALL THE VALUES", values);
                    postAQuestion(values);
                    setTimeout(() => {
                      resetForm();
                      setSubmitting(false);
                    }, 3000);
                  }}
                >
                  {(props) => (
                    <Form className="bg-white shadow-md rounded px-8 mb-4 py-16">
                      {console.log("PROPS IN FORM", props)}
                      <span className="text-4xl">Ask A Question</span>
                      {/* THE TITLE */}
                      <div className="mb-4 w-100">
                        <TextField label="Title" name="title" type="text" />
                      </div>

                      <div className="flex flex-row flex-wrap ">
                        {/* The select field */}

                        <>
                          <div role="group" aria-labelledby="my-radio-group">
                            <label>
                              <Field
                                type="radio"
                                name="scope"
                                value="company"
                              />
                              Company
                            </label>
                            <label>
                              <Field type="radio" name="scope" value="global" />
                              Global
                            </label>

                            <div>Picked: {props.values.scope}</div>
                          </div>
                        </>
                      </div>
                      {/* LIST OF CATEGORY */}
                      <React.Fragment>
                        <label htmlFor="category">Category</label>
                        <Field
                          component="select"
                          id="category"
                          name="category"
                          // multiple={true}
                        >
                          {category_list.map((item, index) => (
                            <option key={index} value={`${item}`}>
                              {item}
                            </option>
                          ))}
                        </Field>
                      </React.Fragment>

                      {/* MULTIPLE TAGS OPTION */}
                      <Field
                        component="select"
                        id="tags"
                        name="tags"
                        multiple={true}
                      >
                        <option value="TAG_1">TAG_1</option>
                        <option value="TAG_2">TAG_2</option>
                        <option value="TAG_3">TAG_3</option>
                        <option value="TAG_4">TAG_4</option>
                      </Field>

                      <div className="mx-auto my-4 mb-6 w-100">
                        <label className="text-xl text-gray-600">
                          Content <span className="text-red-500">*</span>
                        </label>
                        <br />

                        <QuillEditor handleChangeFunc={handleChange} />
                      </div>

                      {/* <div>
                        <Field name="richtext">
                          {({ field, form }) => (
                            <div
                              className="text-editor"
                              style={{ margin: "auto 0px" }}
                            >
                              <RichTextEditor name="richtext" field={field} />
                              {form.errors.richtext && form.touched.richtext ? (
                                <div className="explain">
                                  {form.errors.richtext}
                                </div>
                              ) : null}
                            </div>
                          )}
                        </Field>
                      </div> */}

                      <div className="flex p-1">
                        {/*[📌] The code is commented right-now but will be used when the workflow is complete.
                            THE BELOW CODE WILL SAVE it as draft 
                            or publish the user can save it as a draft by setting the boolean field */}
                        {/* <select
                          className="border-2 border-gray-300 border-r p-2 m-2"
                          name="action"
                        >
                          <option>Save and Publish</option>
                          <option>Save Draft</option>
                        </select> */}
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          {props.isSubmitting ? `Loading...` : "submit"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionForm;

/***
 * Better styled 
 * <div className="flex m-4">
                          <SelectField
                            label="Category"
                            name="category"
                            type="select"
                          />
                        </div>
 * 
 * 
 */
