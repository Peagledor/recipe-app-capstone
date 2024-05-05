import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from '../redux/slices/recipeSlice';
import RecipeCard from '../components/RecipeCard';
import styles from './RecipePosts.module.css';

const RecipePosts = () => {
    const dispatch = useDispatch();
    const { recipes, status, error } = useSelector(state => state.recipes);
    console.log(recipes)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRecipes());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (recipes.length === 0) return <p>No recipes available.</p>;

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipePosts;



// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/RecipeCard';
// import styles from './RecipePosts.module.css';
// import { getRecipes } from '../controllers/recipesController';

// const RecipePosts = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const loadRecipes = async () => {
//             const recipesData = await getRecipes();
//             setRecipes(recipesData);
//         };

//         loadRecipes();
//     }, []);



//     if (recipes.length === 0) {
//         return <p className={styles.noRecipes}>No recipes available.</p>;
//     }

//     return (
//         <div className={styles.recipesContainer}>
//             {recipes.map((recipe) => (
//                 <RecipeCard
//                 key={recipe.id}
//                 recipe={recipe}

//             />
//             ))}
//         </div>
//     );
// };

// export default RecipePosts;
