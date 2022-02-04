import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import apiHandler from "../api/apiHandler";
import { useParams } from "react-router-dom";

const Details = ()=>{
    const [details, setDetails] = useState ([]);
    const {id} = useParams();
     //console.log("useParams est celui la :", id);
    useEffect(()=>{
        apiHandler
            .get(`/api/films/${id}`)
            .then(oneFilm=>{
                setDetails(oneFilm.data);
                //console.log("onefilme est celui la :", oneFilm.data)
            })
    }, [details._id]);
    
    return (
        <p> Film : {details.name}</p>

    )
}

export default Details;