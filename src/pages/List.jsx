import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import Searchbar from "../components/Forms/Searchbar";


const List = () => {
  const [films, setFilms] = useState([]);
  const offsetRef = useRef(0);
  const loadPageLockRef = useRef(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    apiHandler
      .get("/api/films", { params: { q: searchQuery, offset: 0 } })
      .then((flms) => setFilms(flms.data))
      .catch((err) => console.error(err));
  }, [searchQuery]);

  const handlePagenext =()=>{
    if (loadPageLockRef.current || offsetRef.current > 515) {
      return;
    }

    loadPageLockRef.current = true;
    offsetRef.current += 15;
    apiHandler
    .get("/api/films", { params: { q: searchQuery, offset: offsetRef.current } })
    .then((flms) => {
      setFilms(flms.data); 
      loadPageLockRef.current = false;
    })
    .catch(
      (err) => {
        console.error(err);
        loadPageLockRef.current = false;}
    );
  }

  const handlePageprev =()=>{
    if (loadPageLockRef.current || offsetRef.current < 1) {
      return;
    }

    loadPageLockRef.current = true;
    offsetRef.current -= 15;
    apiHandler
    .get("/api/films", { params: { q: searchQuery, offset: offsetRef.current } })
    .then((flms) => {
      setFilms(flms.data); 
      loadPageLockRef.current = false;
    })
    .catch(
      (err) => {
        console.error(err);
        loadPageLockRef.current = false;}
    );
  }

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
      <button onClick={handlePageprev}>prev</button>
      Page number: {offsetRef.current/15} 
      <button onClick={handlePagenext}>next</button>
    </>
  );
};

export default List;
