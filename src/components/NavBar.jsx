import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../redux/slices/userSlice";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
          <Link to="/recipes">Recipes</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/add-recipe">AddRecipe</Link>
            

            <button onClick={logoutHandler}>Log Out</button>{" "}
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
