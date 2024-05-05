import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import AddRecipe from '../pages/AddRecipe';
import { logout } from '../redux/slices/userSlice'; 
import styles from './NavBar.module.css';

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [isAddRecipeOpen, setAddRecipeOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleAddRecipeModal = () => {
      setAddRecipeOpen(!isAddRecipeOpen);
  };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.header}>
            <nav>
                <div className={styles.title}>
                    🍕 Recipe App
                </div>
                <Link to="/" className={styles.link}>Home</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/recipes" className={styles.link}>Recipes</Link>
                        <Link to="/profile" className={styles.link}>Profile</Link>
                        
                        <button onClick={toggleAddRecipeModal} className={styles.button}>Post Recipe</button>
                        <button onClick={logoutHandler} className={styles.button}>Log Out</button>
                    </>
                ) : (
                    <Link to="/login" className={styles.link}>Login</Link> 
                )}
            </nav>
            <Modal isOpen={isAddRecipeOpen} onClose={toggleAddRecipeModal}>
                <AddRecipe onRecipeAdded={toggleAddRecipeModal} />
            </Modal>
        </header>
    );
};

export default NavBar;
