import React from 'react';
import { useDispatch } from 'react-redux';
import { recipeDeleted } from '../redux/slices/recipeSlice';
import { deleteRecipe } from '../controllers/recipesController';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            const response = await deleteRecipe(recipe.id);
            if (response.ok) { // Ensure that your deleteRecipe action is actually checking for a successful HTTP status
                alert('Recipe deleted successfully!');
                dispatch(recipeDeleted(recipe.id)); // Dispatch the action to update the state
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Failed to delete recipe');
            }
        } catch (error) {
            alert(error.message || 'Failed to delete recipe.');
        }
    };

    return (
        <div>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    );
};

export default RecipeCard;




// import { useDispatch } from "react-redux";
// import Comments from "./Comments";
// import { deleteRecipe } from "../controllers/recipesController";
// import { recipeDeleted } from "../redux/slices/recipeSlice";
// import styles from "./RecipeCard.module.css";

// const RecipeCard = ({ recipe }) => {
//   const dispatch = useDispatch();

//   const formatIngredients = (ingredients) => {
//     if (!ingredients) return [];
//     return Object.entries(ingredients).map(([key, value]) => (
//       <li key={key}>{`${key}: ${value}`}</li>
//     ));
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await deleteRecipe(recipe.id);
//       console.log("expect 200:", response);
//       if (response && response.status === 200) {
//         alert("Recipe deleted successfully!");
//         dispatch(recipeDeleted(recipe.id));
//       }
//     } catch (error) {
//       alert("Failed to delete recipe.");
//     }
//   };

//   return (
//     <div className={styles.card}>
//       <img src={recipe.imageUrl} alt={recipe.title} className={styles.image} />
//       <div className={styles.details}>
//         <div className={styles.cardContent}>
//           <h2 className={styles.title}>{recipe.title}</h2>
//           <p className={styles.description}>{recipe.description}</p>
//           <strong>Ingredients:</strong>
//           <ul>{formatIngredients(recipe.ingredients)}</ul>
//           <strong>Instructions:</strong>
//           <p>{recipe.instructions}</p>
//           <button onClick={handleDelete}>Delete Recipe</button>
//           <strong>Posted on:</strong>
//           <p>{new Date(recipe.createdAt).toLocaleDateString()}</p>
//           <Comments recipeId={recipe.id} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
