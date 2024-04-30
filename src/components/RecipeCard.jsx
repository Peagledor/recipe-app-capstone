import React from 'react';
import styles from './RecipeCard.module.css'; 

const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles.recipeCard}>
            <h2 className={styles.recipeTitle}>{recipe.title}</h2>
            <p className={styles.recipeDescription}>{recipe.description}</p>

            {recipe.imageUrl && (
                <img src={recipe.imageUrl} alt={recipe.title} className={styles.recipeImage} />
            )}
        </div>
    );
};

export default RecipeCard;
