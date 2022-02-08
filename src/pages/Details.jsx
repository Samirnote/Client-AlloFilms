import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import apiHandler from "../api/apiHandler";
import { useParams } from "react-router-dom";
import FormComment from "../components/Forms/FormComment"
import CommentList from "../components/CommentList";

const Details = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    const [comments, setComments] = useState([]);
    //console.log("useParams est celui la :", id);
    useEffect(() => {
        apiHandler
            .get(`/api/films/${id}`)
            .then(oneFilm => {
                setDetails(oneFilm.data);
                //console.log("onefilme est celui la :", oneFilm.data)
            })
    }, [details._id]);

    useEffect(() => {
        apiHandler
          .get(`/api/films/${id}/comments`)
          .then((comments) => setComments(comments.data))
          .catch((err) => console.log(err));
      }, []);

    return (
        <div className="film-details">

            <h1> Film : {details.name}</h1>
            <p>{details.description}</p>
            <img src={details.picture} alt={details.name} width="250px" />
            <div className="trailer">
                {console.log(details.videos)}
                {/* details.videos[O].key */}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Gtl-6RCOl84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${details.videos[O].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>

            {/* <div className="casting">
                <ul>
                {details.cast.map((ele)=>{
                    return(
                    <li>
                    {ele.name}
                    </li>
                    )
                }
                )}
                </ul>
            </div>

            <div className="genre">
                <ul>
                {details.genre.map((ele)=>{
                    return(
                    <li>
                    {ele.name}
                    </li>
                    )
                }
                )}
                </ul>
            </div> */}




            <FormComment  setComments={setComments} />
            <CommentList comments={comments} setComments={setComments} />

        </div>

    )
}

export default Details;