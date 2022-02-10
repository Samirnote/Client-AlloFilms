import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import Searchbar from "../components/Forms/Searchbar";


const List = () => {
  const [films, setFilms] = useState([]);
  const offsetRef = useRef(0); // au lieu de useState parceque ca ne rerender pas
  const loadPageLockRef = useRef(false); // pour ne pas beuguer le code quand on click plusieur fois
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    apiHandler
      .get("/api/films", { params: { q: searchQuery, offset: 0 } })
      .then((flms) => setFilms(flms.data))
      .catch((err) => console.error(err));
  }, [searchQuery]);

  const handlePagenext = () => {
    console.log("films.length", films.length)
    if (loadPageLockRef.current || !films.length) { // condition pour arreter la pagination
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
          loadPageLockRef.current = false;
        }
      );
  }

  const handlePageprev = () => {
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
          loadPageLockRef.current = false;
        }
      );
  }

  console.log("q:", searchQuery);
  console.log(films);

  return (
    <section id='List' className='List'>
      <h1>Our list of films</h1>
      <Searchbar searchCallback={setSearchQuery} />

      <div className="pagination">
        <button onClick={handlePageprev}>prev</button>
        Page number: {offsetRef.current / 15}
        <button onClick={handlePagenext}>next</button>
      </div>

      {films.map((flm, i) => {
        return (
          <Link id="filmCard" className="filmCard" key={i} to={`/films/${flm._id}`}>
            <div >
              <img src={flm.picture} alt={flm.name} width="100px" />
              <h3>{flm.name}</h3> {/*({flm.releaseDate}) */}
            </div>
          </Link>
        );
      })}
      <div className="pagination">
        <button onClick={handlePageprev}>prev</button>
        Page number: {offsetRef.current / 15}
        <button onClick={handlePagenext}>next</button>
      </div>
    </section>
  );
};

export default List;
