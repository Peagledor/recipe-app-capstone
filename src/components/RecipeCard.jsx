// RecipeCard.jsx
import React from 'react';
import styles from './RecipeCard.module.css'; // Ensure styling is consistent

const RecipeCard = ({ recipe }) => {
    return (
        <div className={styles.card}>
            <img src={recipe.imageUrl} alt={recipe.title} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.title}>{recipe.title}</h3>
                <p className={styles.description}>{recipe.description.substring(0, 100)}...</p>
            </div>
        </div>
    );
};

export default RecipeCard;


// import React from "react";
// import CommentCard from "./CommentCard"; // Ensure you import CommentCard
// import styles from "./RecipeCard.module.css";
// import {
//   toggleFavorite,
//   removeFavorite,
// } from "../controllers/favoritesController";
// const RecipeCard = ({ recipe, isFavorited, onToggleFavorite, userId }) => {
//   const toggleFavoriteHandler = async () => {
//     await toggleFavorite(userId, recipe.id, isFavorited);
//     onToggleFavorite(recipe.id);
//   };
//   const removeRecipeHandler = async () => {
//     await removeFavorite(recipe.id);
//   };
//   // Function to format ingredients into a list
//   const formatIngredients = (ingredients) => {
//     return Object.entries(ingredients).map(([key, value]) => (
//       <li key={key}>{`${key}: ${value}`}</li>
//     ));
//   };
//   return (
//     <div className={styles.recipeCard}>
//       <h2 className={styles.recipeTitle}>{recipe.title}</h2>
//       <p className={styles.recipeDescription}>{recipe.description}</p>
//       {recipe.imageUrl && (
//         <img
//           src={recipe.imageUrl}
//           alt={recipe.title}
//           className={styles.recipeImage}
//         />
//       )}
//       <div>
//         <strong>Ingredients:</strong>
//         {recipe.ingredients ? (
//           <ul>{formatIngredients(recipe.ingredients)}</ul>
//         ) : (
//           <p>No ingredients listed</p>
//         )}
//         <p>
//           <strong>Instructions:</strong> {recipe.instructions}
//         </p>
//         <p>
//           <strong>Posted on:</strong>{" "}
//           {new Date(recipe.createdAt).toLocaleDateString()}
//         </p>
//       </div>

//       {recipe.comments && recipe.comments.length > 0 ? (
//         recipe.comments.map((comment) => (
//           <CommentCard
//             key={comment.id}
//             comment={comment}
//             onCommentDeleted={() => {}}
//             userId={userId}
//           />
//         ))
//       ) : (
//         <p>No comments yet.</p>
//       )}

//       {userId && (
//         <button onClick={toggleFavoriteHandler}>
//           {isFavorited ? "Unfavorite" : "Favorite"}
//         </button>
//       )}

//       {userId === recipe.userId && (
//         <button onClick={removeRecipeHandler}>Delete</button>
//       )}
//     </div>
//   );
// };

// export default RecipeCard;
