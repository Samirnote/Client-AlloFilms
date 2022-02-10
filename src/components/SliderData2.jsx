import React, { useEffect, useState } from "react";
import apiHandler from "../api/apiHandler";


const CommentList = ({comments, setComments}) => {
 
  const [comment, setComment] = useState('');
  const [showTextArea, setShowTextArea] = useState({id: null, show:false})
  const { id } = useParams();

apiHandler
      .get("/api/films", { params: { limit: 10 } })
      .then((flms) => setFilms(flms.data))
      .catch((err) => console.error(err));

}

export default SliderData;

{
  /* <Link to={`/films/${id}/comments/${comment._id}`}>edit</Link> */
}
