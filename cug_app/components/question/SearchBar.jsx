import React from "react";
import Head from "next/head";
const SearchBar = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Head>

      <form id="searchbar" action="">
        <input id="searchbar_input" type="search" />
        <i id="search_icon" className="fa fa-search"></i>
      </form>
    </>
  );
};

export default SearchBar;
