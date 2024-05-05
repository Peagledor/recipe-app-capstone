import React from 'react';
import { useDispatch } from 'react-redux';
import { recipeDeleted } from '../redux/slices/recipeSlice';
import { deleteRecipe } from '../controllers/recipesController';
import Comments from './Comments'
import styles from './RecipeCard.module.css'
import Styles from './Styles.module.css';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();

    const formatIngredients = (ingredients) => {
          if (!ingredients) return [];
          return Object.entries(ingredients).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ));
        };

    const handleDelete = async () => {
        try {
            const response = await deleteRecipe(recipe.id);
            if (response && response.ok) { 
                alert('Recipe deleted successfully!');
                dispatch(recipeDeleted(recipe.id));
            } else {
                const data = await response.json();
                throw new Error(data.message || 'Failed to delete recipe');
            }
        } catch (error) {
            alert(error.message || 'Failed to delete recipe.');
        }
    };

    return (
      <div className={`${Styles.card}`}>
        <img src={recipe.imageUrl} alt={recipe.title} className={styles.img} style={{ width: '100%', objectFit: 'cover' }} />
        <div className={Styles.commonText}>
          <h2 className={Styles.commonTitle}>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <strong>Ingredients:</strong>
          <ul>{formatIngredients(recipe.ingredients)}</ul>
          <strong>Instructions:</strong>
          <p>{recipe.instructions}</p>
          <button onClick={handleDelete} className={Styles.deleteButton}>Delete Recipe</button>
          <Comments/>
        </div>
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
