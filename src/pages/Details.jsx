import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import apiHandler from "../api/apiHandler";
import { useParams } from "react-router-dom";
import FormComment from "../components/Forms/FormComment";
import CommentList from "../components/CommentList";

const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  //console.log("useParams est celui la :", id);
  useEffect(() => {
    apiHandler.get(`/api/films/${id}`).then((oneFilm) => {
      setDetails(oneFilm.data);
      //console.log("onefilme est celui la :", oneFilm.data)
    });
  }, [details._id]); // j'ai limpression que la dependency details._id ici ne sert à rien...

  useEffect(() => {
    apiHandler
      .get(`/api/films/${id}/comments`)
      .then((comments) => setComments(comments.data))
      .catch((err) => console.log(err));
  }, []);

  if (!details.name) return <p>Loading...</p>;
  return (
    <div className="film-details">
      <h1> Film : {details.name}</h1>
      <h2>Release date : {details.releaseDate}</h2>
      <p>{details.description}</p>
      <img src={details.picture} alt={details.name} width="250px" />
      <div className="trailer">
        {console.log(details.videos)}
        {console.log(details.videos[0].key)}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Gtl-6RCOl84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${details.videos[0].key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="casting">
        <h2>Casting:</h2>
        <ul>
          {details.cast.map((ele) => {
            return <li>{ele.name}</li>;
          })}
        </ul>
      </div>

      <div className="genre">
        <h2>Genres:</h2>
        <ul>
          {details.genre.map((ele) => {
            return <li>{ele.name}</li>;
          })}
        </ul>
      </div>

      <div className="crew">
        <h2>Crew:</h2>
        <ul>
          {details.crew.map((ele) => {
            return (
              <li>
                {ele.job} : {ele.name}
              </li>
            );
          })}
        </ul>
      </div>

      <FormComment setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
};

export default Details;
