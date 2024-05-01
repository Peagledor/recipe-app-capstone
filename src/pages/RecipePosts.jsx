// src/pages/RecipesPosts.jsx
import { useEffect, useState } from "react";
import { getRecipes } from "../controllers/recipesController";
import RecipeCard from "../components/RecipeCard"; // Ensure correct import path
// import CommentCard from "../components/CommentCard"; // Ensure correct import path

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

      {recipes.map((recipe,) => (
          <RecipeCard
          key={recipe.id}
            recipe={recipe}
            isFavorited={recipe.isFavorited}
            onToggleFavorite={handleToggleFavorite}
            userId={recipe}
          />
          

          // {recipe.comments &&
            //recipe.comments.map((comment) => (
              //<CommentCard
                //key={comment.id}
                //comment={comment}
                //onCommentDeleted={(commentId) =>
                  //handleCommentDeleted(commentId, recipe.id)
                //}
              ///>
           // ))} 
        
      ))}
    </div>
  );
};

export default RecipesPosts;
