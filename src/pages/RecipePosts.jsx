import { useEffect, useState, useCallback } from 'react';
import RecipeCard from '../components/RecipeCard';
import CommentCard from '../components/CommentCard';
import { getRecipes } from '../controllers/recipesController';
const RecipePosts = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
    };
    loadRecipes();
  }, []);
  const handleCommentDeleted = useCallback((commentId, recipeId) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId
          ? { ...recipe, comments: recipe.comments.filter(comment => comment.id !== commentId) }
          : recipe
      )
    );
  }, []);
  const handleToggleFavorite = useCallback((recipeId) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId
          ? { ...recipe, isFavorited: !recipe.isFavorited }
          : recipe
      )
    );
  }, []);
  if (recipes.length === 0) {
    return <p>No recipes available.</p>;
  }
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard
            recipe={recipe}
            isFavorited={recipe.isFavorited}
            onToggleFavorite={() => handleToggleFavorite(recipe.id)}
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
      ))}
    </div>
  );
};

export default RecipePosts;
