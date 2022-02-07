import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import Searchbar from "../components/Forms/Searchbar";

const List = () => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    apiHandler
      .get("/api/films", { params: { q: searchQuery, offset: 1, limit: 10 } })
      .then((flms) => setFilms(flms.data))
      .catch((err) => console.error(err));
  }, [searchQuery]);

  console.log("q:", searchQuery);
  console.log(films);

  return (
    <>
      <h1>Our list of films</h1>
      <Searchbar searchCallback={setSearchQuery} />
      <ul>
        {films.map((flm, i) => {
          return (
            <Link key={i} to={`/films/${flm._id}`}>
              <li>{flm.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default List;
