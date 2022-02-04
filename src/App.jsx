import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import FormComment from "./components/Forms/FormComment"
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FilmList from "./pages/List";
import Details from "./pages/Details";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import AllFilms from "./pages/AllFilms";

function App() {
	return (
		<div className="App">
			<NavMain />
<<<<<<< HEAD
			<FormComment />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/films" element={<AllFilms />} />
=======
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/films" element={<FilmList/>}/>
				<Route path="/films/:id" element={<Details/>} />
>>>>>>> da44600c116874c3d2b4a78e81674428d817f6f2
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
					{/* <Route path="/films/:id/comment" element={<FormComment/>} /> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
