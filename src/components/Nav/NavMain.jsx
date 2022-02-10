import { NavLink, Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";


const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <nav id='NavMain' className="NavMain">
      <NavLink className="title Link" to="/">
        AlloFilms
      </NavLink>
      <NavLink className="Link" to="/films">Films</NavLink>
      {isLoggedIn && (
        <div id='logging' className='logging'>
          <NavLink to="/profile">Profile</NavLink>
          <button id='removeUser' clasName='removeUser' onClick={removeUser}>Log-Out</button>
        </div>
      )}
      {!isLoggedIn && (
        <div id='logging' className='logging'>
          <Link className='Link' to="/signin">Sign-in</Link>
          <Link className='Link' to="/signup">Sign-Up</Link>
        </div>
      )}
    </nav>
  );
};

export default NavMain;
