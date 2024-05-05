import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../controllers/recipesController';
import { recipeAdded } from '../redux/slices/recipeSlice'; // Assuming you have a recipes slice as discussed

function AddRecipe({ onRecipeAdded }) {
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const newRecipe = {
          title,
          description,
          imageUrl,
          ingredients: JSON.stringify(ingredients),
          instructions,
          userId: user ? user.id : null
      };
  
      try {
          const recipe = await addRecipe(newRecipe);
          if (recipe) {
              console.log("Recipe added successfully", recipe);
              dispatch(recipeAdded(recipe));
              onRecipeAdded();
              navigate('/recipes');
          } else {
              throw new Error('Failed to add recipe');
          }
      } catch (error) {
          console.error('Error adding recipe:', error);
      }
  };

    return (
        <div className="modalContent">
            <h2>Add a Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /></label>
                <label>Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} required /></label>
                <label>Image URL: <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required /></label>
                <label>Ingredients: <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /></label>
                <label>Instructions: <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required /></label>
                <button type="submit" className="closeButton">Submit Recipe</button>
                <button onClick={onRecipeAdded} className="closeButton">Close</button>
            </form>
        </div>
    );
}

export default AddRecipe;