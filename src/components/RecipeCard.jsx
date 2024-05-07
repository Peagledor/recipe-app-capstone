import { useDispatch } from "react-redux";
import { recipeDeleted } from "../redux/slices/recipeSlice";
import { deleteRecipe } from "../controllers/recipesController";
import Comments from "./Comments";
import styles from "./RecipeCard.module.css";
// import Styles from "./Styles.module.css";

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
        alert("Recipe deleted successfully!");
        dispatch(recipeDeleted(recipe.id));
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete recipe");
      }
    } catch (error) {
      alert(error.message || "Failed to delete recipe.");
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className={styles.recipeImg}
      />
      <div className={styles.commonText}>
        <h2 className={styles.commonTitle}>{recipe.title}</h2>
        <strong>Ingredients</strong>
        <p>{recipe.description}</p>
        {/* <strong>Rating:</strong> */}
        <p>{formatIngredients(recipe.ingredients)}</p>
        <strong>Instructions:</strong>
        <p>{recipe.instructions}</p>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Delete Recipe
        </button>
        <Comments />
      </div>
    </div>
  );
};

export default RecipeCard;
