import { useState } from "react";
import useForm from "../../hooks/useForm"


const CommentForm = ()=>{

    const [{content, date}, handleChange]= useForm({content : ""});

    return (
        <>
        <form>
            <textarea type="text" name="content" onChange={handleChange} value={content}/>
        </form>

        <input type="date" name="date" defaultValue={new Date().toLocaleDateString()}/>

        <button>Push</button>
        </>
    );
}

export default CommentForm; 