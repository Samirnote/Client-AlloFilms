import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";


const AllFilms = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/api/films")
            .then((flms) => {
                console.log(flms);
                setFilms(flms.data)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <ul>
            {films.map(flm => {
                return (
                    <li>{flm.name}</li>
                )
            })}
        </ul>
    )
}

export default AllFilms
