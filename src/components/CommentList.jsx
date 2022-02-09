import React, { useEffect, useState } from "react";
import apiHandler from "../api/apiHandler";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";

const CommentList = ({comments, setComments}) => {
  const {isLoggedIn, currentUser} = useAuth();
  const [comment, setComment] = useState('');
  const [showTextArea, setShowTextArea] = useState({id: null, show:false})
  const { id } = useParams();

  const handleUpdateComment = (commentId, index)=>{
      apiHandler
      .patch(`/api/films/${id}/comments/${commentId}`, {content: comment} )
      .then(()=>{

        const newComments = [...comments]
        newComments[index].content = comment

        setComments(newComments)

  
          setShowTextArea({id: null, show: !showTextArea.show})
        }
      )
      .catch((err)=>console.log(err));
  }


  const handleDelete = (commentId)=> {
      apiHandler
      .delete(`/api/films/${id}/comments/${commentId}`)
      .then(()=>{
          console.log("dans le then")
          setComments(oldState=> oldState.filter((element) => element._id !== commentId))
          setShowTextArea({id: null, show: !showTextArea.show})
      })
      .catch((err)=>console.log(err))
          
  }



  return (
    <>
      <h2> Comments on this film</h2>
      <ul>
        {comments.map((comment, index) => {
          return (
            <li key={comment._id}>
              <span>{comment.author.name}</span> : 
              <span>{comment.content}</span>
              {console.log("currentUser", currentUser)}
              {console.log("author", comment.author.name)}
              {isLoggedIn && currentUser.name === comment.author.name &&(
              <button onClick={() => setShowTextArea({id: comment._id,show: !showTextArea.show})}>Edit</button>)}
              {showTextArea.id === comment._id && showTextArea.show  && isLoggedIn && currentUser &&(
                
                <>
                <textarea name="" id="" cols="30" rows="10" defaultValue={comment.content} onChange={(e)=>{setComment(e.target.value)}}></textarea>
                <button onClick={() => handleUpdateComment(comment._id, index)}>Save edit</button>

                
                </>
            )}
            {isLoggedIn && currentUser.name === comment.author.name &&(
            <button onClick={() => handleDelete(comment._id)}>Delete</button>)}
            
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
