import { useState } from "react";
import useForm from "../../hooks/useForm"
import apiHandler from "../../api/apiHandler";
import { useParams } from "react-router-dom";

const CommentForm = ()=>{
    const {id} = useParams();
    const [content, setContent]= useState("");

    const handleComment = (e)=>{
        e.preventDefault();
        const newCom = {content}
        console.log("je suis la : ", newCom);

        apiHandler
			.post(`/${id}/comments`, newCom)
            .then(response=>{console.log(response)})
			.catch((error) => {
				setError(error.response.data);
			});

    }

    return (
        <>
        <form onSubmit={handleComment}>
            <textarea type="text" name="content" onChange={setContent} />
        </form>

        <button>Push</button>
        </>
    );
}

export default CommentForm; 