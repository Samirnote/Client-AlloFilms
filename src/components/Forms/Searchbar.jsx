import React from "react";

const SearchBar = ({ searchCallback }) => {
  return (
    <form>
      <label htmlFor="search">Search your movie</label>
      <input
        type="text"
        name="search"
        onChange={(e) => searchCallback(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
