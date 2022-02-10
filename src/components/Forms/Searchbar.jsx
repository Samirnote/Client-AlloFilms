import React from "react";

const SearchBar = ({ searchCallback }) => {
  return (
    <form id='searchbar' className='searchbar'>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search a movie"
        name="search"
        textalign="left"
        onChange={(e) => searchCallback(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
