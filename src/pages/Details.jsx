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
        <>
        {console.log(comments)}

            <p> Film : {details.name}</p>
            <FormComment  setComments={setComments} />

            <CommentList comments={comments} setComments={setComments} />

        </>

    )
}

export default Details;