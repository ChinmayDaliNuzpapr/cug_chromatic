import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex border-grey-light border ml-4">
        <input
          className="w-full rounded ml-1"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
          <span className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
            <i className="material-icons text-xs">search</i>
          </span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
