// NavBar.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice'; // Make sure the path matches your setup
import styles from './NavBar.module.css';

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.header}>
            <nav>
                <Link to="/" className={styles.link}>Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/recipes" className={styles.link}>Recipes</Link>
                        <Link to="/profile" className={styles.link}>Profile</Link>
                        <Link to="/favorites" className={styles.link}>Favorites</Link>
                        <button onClick={logoutHandler} className={styles.button}>Log Out</button>
                    </>
                ) : (
                    <Link to="/login" className={styles.link}>Login</Link> // Ensure this link is always shown when not logged in
                )}
            </nav>
        </header>
    );
};

export default NavBar;
