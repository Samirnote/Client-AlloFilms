import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import apiHandler from "../api/apiHandler";

const List = ()=>{

    const [films, setFilms] = useState ([]);

    useEffect(()=>{
       apiHandler
        .get("/api/films")
        .then((flms)=>{
            setFilms(flms.data)
        })
        .catch(err=>console.error(err))
    }, []);

    return (

        <ul>
        {films.map((flm, i)=>{
            return (
            <Link key={i} to={`/films/${flm._id}`}><li>{flm.name}</li></Link>
            )
        })}
        </ul>
    )
}

export default List;