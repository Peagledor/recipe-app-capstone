// RecipePosts.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import styles from './RecipePosts.module.css';
import { getRecipes } from '../controllers/recipesController';

const RecipePosts = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadRecipes = async () => {
            const recipesData = await getRecipes();
            setRecipes(recipesData);
        };

        loadRecipes();
    }, []);

    if (recipes.length === 0) {
        return <p className={styles.noRecipes}>No recipes available.</p>;
    }

    return (
        <div className={styles.recipesContainer}>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipePosts;
