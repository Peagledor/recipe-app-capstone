import { useEffect, useState } from 'react';
import { getRecipes } from '../controllers/recipesController';
import RecipeCard from './RecipeCard';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const fetchedRecipes = await getRecipes();
            setRecipes(fetchedRecipes);
        };

        fetchRecipes();
    }, []);

    if (recipes.length === 0) return <div>Loading...</div>;

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipesList;
