import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../controllers/recipesController';
import styles from './RecipeDetails.module.css';
import Styles from '../components/Styles.module.css'

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setIsLoading(true);
            try {
                const fetchedRecipe = await getRecipe(parseInt(recipeId));
                setRecipe(fetchedRecipe);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (isLoading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;
    if (!recipe) return <p className={styles.notFound}>No recipe found!</p>;

    return (
        // <div className={styles.detailsContainer}>
            // <div className={Styles.card}>
            <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} className={Styles.img} />
            <p className={styles.description}>{recipe.description}</p>
            <h3>Ingredients</h3>
            <ul className={styles.ingredientsList}>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p className={styles.instructions}>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetails;
