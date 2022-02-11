import React, { useEffect, useState } from "react";
import apiHandler from "../api/apiHandler";
import {Link} from "react-router-dom";

const LastReleased = () => {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await apiHandler.get("/api/films/lastReleased");
      //   const films = data.map((film=>film));
      console.log("data for films ? ", data);
      setFilms(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  
  if (!films) return <p>Loading...</p>;

  return (

    <section className="LastReleased">
      <h2>Last released films:</h2>
      <div className="last-released-box">
        {films.map((film) => {
          return (
            <Link to={`/films/${film._id}`} >
              <div key={film._id} className="film">
              <div className="image-film">
                <img src={film.picture} alt="travel image" className="image" />
              </div>
              <div className="film-infos">
                {/* <span className="film-name">{film.name}</span>{" "} */}

                {console.log(film.releaseDate.substring(0, 7))}
                <span className="film-release">
                  released on : {film.releaseDate.substring(0, 7)}
                </span>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LastReleased;
