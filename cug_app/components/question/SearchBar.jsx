import React from "react";
import Head from "next/head";
const SearchBar = () => {
  return (
    <>
      <form id="searchbar" action="">
        <input id="searchbar_input" type="search" />
        <i id="search_icon" className="fa fa-search"></i>
      </form>
    </>
  );
};

export default SearchBar;
