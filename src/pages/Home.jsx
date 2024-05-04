import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRecipes, toggleFavorite } from '../controllers/recipesController';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadRecipes = async () => {
            const fetchedRecipes = await getRecipes();
            setRecipes(fetchedRecipes);
        };
        loadRecipes();
    }, []);


    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                />
            ))}
        </div>
    );
};

export default Recipes;
