import React, { useEffect, useState } from "react";
import apiHandler from "../api/apiHandler";

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

  //   if (!Array.isArray(films) || films.length <= 0) {
  //     return null;
  //   }
  if (!films) return <p>Loading...</p>;

  return (
    //   <div>
    //       <div>
    //            <img src="image du film" alt="" />
    //          <h3>nom du film</h3>
    //       </div>
    //   </div>

    <section className="last-released">
      <h2>Last released films:</h2>
      {films.map((film) => {
        return (
          <div key={film._id} className="film">
            <div className="image-film">
              <img
                src={film.picture}
                width="300"
                alt="travel image"
                className="image"
              />
            </div>
            <div className="film-infos">
              {film.name} : {film.releaseDate}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LastReleased;
