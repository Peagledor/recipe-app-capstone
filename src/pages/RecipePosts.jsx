import { useEffect, useState } from "react";
import { getRecipes } from "../controllers/recipesController";
import RecipeCard from "../components/RecipeCard"; // Ensure correct import path
import CommentCard from "../components/CommentCard"; // Ensure correct import path

const RecipesPosts = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleCommentDeleted = (commentId, recipeId) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) => {
        if (recipe.id === recipeId) {
          recipe.comments = recipe.comments.filter((c) => c.id !== commentId);
        }
        return recipe;
      })
    );
  };

  const handleToggleFavorite = (recipeId) => {
    setRecipes(recipes.map((recipe) =>
          recipe.id === recipeId ? { ...recipe, isFavorited: !recipe.isFavorited } : recipe // Toggle favorite status
      ));
  };

  return (
    <div>
      <h1>Recipes Posts</h1>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard
              recipe={recipe}
              isFavorited={recipe.isFavorited}
              onToggleFavorite={() => handleToggleFavorite(recipe.id)}
              userId={recipe.userId} // Assuming recipe.userId is the intended property
            />
            {recipe.comments &&
              recipe.comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  onCommentDeleted={() => handleCommentDeleted(comment.id, recipe.id)}
                />
              ))}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipesPosts;
