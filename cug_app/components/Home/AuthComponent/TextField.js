import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 py-2">
      <label
        className={`block text-gray-700 text-2xl font-bold my-4`}
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
