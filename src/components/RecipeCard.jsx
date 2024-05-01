
import React from 'react';
import styles from './RecipeCard.module.css';
import { toggleFavorite, removeFavorite } from '../controllers/favoritesController'; // Reference necessary functions

const RecipeCard = ({ recipe, isFavorited, onToggleFavorite, userId }) => {
    const toggleFavoriteHandler = async () => {
        await toggleFavorite(userId, recipe.id, isFavorited);
        onToggleFavorite(recipe.id)}; 

    const removeRecipeHandler = async () => {
        await removeFavorite(recipe.id); 
        
    };

    return (
        <div className={styles.recipeCard}>
            <h2 className={styles.recipeTitle}>{recipe.title}</h2>
            <p className={styles.recipeDescription}>{recipe.description}</p>

            {recipe.imageUrl && (
                <img src={recipe.imageUrl} alt={recipe.title} className={styles.recipeImage} />
            )}

            {userId && (
                <button onClick={toggleFavoriteHandler}>
                    {isFavorited ? 'Unfavorite' : 'Favorite'}
                </button>
            )}

            {userId === recipe.userId && (
                <button onClick={removeRecipeHandler}>Delete</button> 
            )}
        </div>
    );
};


export default RecipeCard;
