// import { useEffect, useState } from 'react';
// import RecipePosts from './RecipePosts';
// import { getRecipes } from '../controllers/recipesController';

// const Home = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       const recipesData = await getRecipes();
//       setRecipes(recipesData);
//     };
//     loadRecipes();
//   }, []);

//   return (
//     <div>
//       <h1>Home</h1>
//       <RecipePosts recipes={recipes} />
//     </div>
//   );
// };

// export default Home;

// Recipes.jsx
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

    const handleFavoriteToggle = async (recipeId) => {
        await toggleFavorite(recipeId); // Your API call to toggle favorite
        // Refresh list or update state here if needed
    };

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onFavoriteToggle={handleFavoriteToggle}
                    isFavorited={recipe.isFavorited} // This needs to be determined somehow
                />
            ))}
        </div>
    );
};

export default Recipes;
