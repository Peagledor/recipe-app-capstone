import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../controllers/recipesController';  

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const fetchedRecipe = await getRecipe(parseInt(recipeId));
        setRecipe(fetchedRecipe);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchRecipe();
  }, [recipeId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipe found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} style={{ width: '50%' }} />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
