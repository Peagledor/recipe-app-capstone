import { useEffect, useState } from 'react';
import RecipePosts from './RecipePosts';
import { getRecipes } from '../controllers/recipesController';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
    };
    loadRecipes();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <RecipePosts recipes={recipes} />
    </div>
  );
};

export default Home;