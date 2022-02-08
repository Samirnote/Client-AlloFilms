import { useState } from "react";
import useForm from "../../hooks/useForm"
import apiHandler from "../../api/apiHandler";
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "./../CommentList"



const CommentForm = ({setComments})=>{
    const {id} = useParams();
    const [content, setContent]= useState("");
    const navigate = useNavigate();

    // console.log(" useParams ", id)
    // console.log(" Content ", content)
    
    const handleComment = (e) => {
        e.preventDefault();
        //console.log('le submit marche ?')
        //console.log(" Content dans handle comment", content)
        
        apiHandler
			.post(`/api/films/${id}/comments`, { content, film : id })
            .then((response)=>{
                console.log(response)
                console.log('RESPONNNNSEEEE', response.data)
              
                setComments(oldState =>  [...oldState, response.data])

            })
			.catch((error) => {
				console.log(error);
			});
    }

    return (
        <>
        <form onSubmit={handleComment}>
            <textarea type="text" name="content" onChange={(e) => setContent(e.target.value)} />
            <button>Submit your comment</button>
        </form>
    
        </>
    );
}

export default CommentForm; 