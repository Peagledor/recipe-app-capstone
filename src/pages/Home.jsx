import {useEffect, useState} from 'react'
import RecipeCard from '../components/RecipeCard'
import {getRecipes} from '../controllers/recipesController'

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData)
    };
    loadRecipes();
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)}

    </div>
  );
};

export default Home;