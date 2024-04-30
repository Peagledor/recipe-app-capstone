import {useEffect, useState} from 'react'
import Posts from '../pages/Posts'
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
      <Posts/>
    </div>
  );
};

export default Home;