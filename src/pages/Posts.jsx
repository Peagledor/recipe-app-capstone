import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecipes } from "../controllers/recipesController";
import RecipeCard from "../components/RecipeCard";
import CommentCard from "../components/CommentCard";
import AddRecipe from "../pages/AddRecipe"; 
import AddComment from "../pages/AddComment"; 

const RecipesPosts = () => {
  const [recipes, setRecipes] = useState([]);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false); // Modal state
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h1>Recipes Posts</h1>

      {/* Button to open the modal */}
      {isAuthenticated && (
        <button onClick={() => setIsRecipeModalOpen(true)}>Add Recipe</button>
      )}

      {/* Render the modal if open */}
      <AddRecipe
        isOpen={isRecipeModalOpen}
        onClose={() => setIsRecipeModalOpen(false)}
      />

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />

          <h4>Comments:</h4>
          {recipe.comments &&
            recipe.comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}

          {/* Button and textbox for adding comments */}
          {isAuthenticated && <AddComment recipeId={recipe.id} />}
        </div>
      ))}
    </div>
  );
};

export default RecipesPosts;