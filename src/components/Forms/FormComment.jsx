import { useState } from "react";
import useForm from "../../hooks/useForm"


const CommentForm = ()=>{

    const [{content}, handleChange]= useForm({content : ""});

    return (
        <>
        <form>
            <textarea type="text" name="content" onChange={handleChange} value={content}/>
        </form>

        <button>Push</button>
        </>
    );
}

export default CommentForm; 