import React from "react";
import useAuth from "../auth/useAuth";
import apiHandler from "../api/apiHandler";
import { useState } from "react";

const Profile = () => {
	const { currentUser, authenticateUser, storeToken} = useAuth();
	const[avatar, setAvatar]= useState(currentUser?.avatar);
	const [name, setName]= useState(currentUser?.name);
	const [updateForm, setUpdateForm] = useState(false);
	
	const handleSubmit = async (e)=>{
		e.preventDefault()
		const fd = new FormData()

		fd.append("name", name)
		fd.append("avatar", avatar)

		try{
			
		const response = await apiHandler.patch(`/api/auth/profile/update/${currentUser._id}`, fd)

		const token = response.data.authToken
		
		//console.log(token)
		//console.log("avatar est la :", avatar)

		storeToken(token)
		authenticateUser();

		setUpdateForm(false);

		}catch(err){
			console.log(err);
		}
	}


	return (
		<div>
			
			<p>Welcome to your profile : {currentUser.name} </p>
			
			<img src={`${currentUser.avatar}`} alt={currentUser.name}/>
			
			
			<button onClick={()=>{setUpdateForm(!updateForm)}}>Update your profile</button>
			
			{updateForm &&
			<form onSubmit={handleSubmit} >
				<label htmlFor={currentUser.name}>Change your name :</label>
				<input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>


				<label htmlFor={currentUser.avatar}>Change your picture :</label>
				<input type="file" name="avatar"  onChange={(e)=>setAvatar(e.target.files[0])}/>

				<button>Submit</button>
			</form>
			} 
			
		</div>
	);
};

export default Profile;
