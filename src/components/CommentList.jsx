import React, { useEffect, useState } from "react";
import apiHandler from "../api/apiHandler";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [showTextArea, setShowTextArea] = useState({id: null, show:false})
  const { id } = useParams();

  const handleUpdateComment = (commentId)=>{
      apiHandler
      .patch(`/api/films/${id}/comments/${commentId}`, {content: comment} )
      .then(()=>{
          setShowTextArea({id: null, show: !showTextArea.show})
        }
      )
      .catch((err)=>console.log(err));
  }

  useEffect(() => {
    apiHandler
      .get(`/api/films/${id}/comments`)
      .then((comments) => setComments(comments.data))
      .catch((err) => console.log(err));
  }, [showTextArea.show]);


//   useEffect(() => {
//     handleUpdateComment()
//   }, [comments]);



  return (
    <>
      <h2> Comments on this film</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment._id}>
              <span>{comment.author.name}</span> : 
              <span>{comment.content}</span>
              <button onClick={() => setShowTextArea({id: comment._id,show: !showTextArea.show})}>Edit</button>
            {showTextArea.id === comment._id && showTextArea.show && (
                <>
                <textarea name="" id="" cols="30" rows="10" defaultValue={comment.content} onChange={(e)=>{setComment(e.target.value)}}></textarea>
                <button onClick={() => handleUpdateComment(comment._id)}>Save edit</button>
                </>
            )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;

{
  /* <Link to={`/films/${id}/comments/${comment._id}`}>edit</Link> */
}
