import React from "react";
import CommentCard from "./CommentCard";
import Comments from "./Comments"; // Ensure this is the right component for displaying comments and adding new ones
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ recipe, onFavoriteToggle, isFavorited, userId }) => {
  const toggleFavoriteHandler = async () => {
    onFavoriteToggle(recipe.id, isFavorited);
  };

  const formatIngredients = (ingredients) => {
    // Check if ingredients is null or undefined and return an empty array if true
    if (!ingredients) return [];
  
    return Object.entries(ingredients).map(([key, value]) => (
      <li key={key}>{`${key}: ${value}`}</li>
    ));
  };

  return (
    <div className={styles.card}>
      <img src={recipe.imageUrl} alt={recipe.title} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>{recipe.title}</h2>
          <p className={styles.description}>{recipe.description}</p>
          <strong>Ingredients:</strong>
          <ul>{formatIngredients(recipe.ingredients)}</ul>
          <strong>Instructions:</strong>
          <p>{recipe.instructions}</p>
          <strong>Posted on:</strong>
          <p>{new Date(recipe.createdAt).toLocaleDateString()}</p>
          <Comments recipeId={recipe.id} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;



// import styles from './RecipeCard.module.css';
// const RecipeCard = ({ recipe, onFavoriteToggle, isFavorited }) => {
//     return (
//         <div className={styles.card}>
//             <img src={recipe.imageUrl} alt={recipe.title} className={styles.image} />
//             <div className={styles.details}>
//                 <h3 className={styles.title}>{recipe.title}</h3>
//                 <p className={styles.description}>{recipe.description}</p>
//                 {onFavoriteToggle && (
//                     <button onClick={() => onFavoriteToggle(recipe.id)} 
//                        className={styles.favoriteButton}>
//                         {isFavorited ? 'Unfavorite' : 'Favorite'}
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default RecipeCard;
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
