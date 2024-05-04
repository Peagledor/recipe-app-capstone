import React, { useCallback } from 'react';
import RecipeCard from '../components/RecipeCard';
import CommentCard from '../components/CommentCard';

const RecipePosts = ({ recipes, setRecipes }) => {
  const handleCommentDeleted = useCallback((commentId, recipeId) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        return {
          ...recipe,
          comments: recipe.comments.filter(comment => comment.id !== commentId)
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  }, [recipes, setRecipes]);

  const handleToggleFavorite = useCallback((recipeId) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        return {
          ...recipe,
          isFavorited: !recipe.isFavorited
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  }, [recipes, setRecipes]);

  if (!recipes) {
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
