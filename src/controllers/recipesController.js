// src/controllers/recipesController.js
import axios from 'axios';

export const getRecipes = async () => {
    try {
        const response = await axios.get('http://localhost:4000/recipes');
        return response.data;
    } catch (error) {
        console.error('Failed to get recipes:', error);
        return [];
    }
};

export const addRecipe = async (recipe) => {
    try {
        const response = await axios.post('http://localhost:4000/recipes', recipe);
        return response.data;
    } catch (error) {
        console.error('Failed to add recipe:', error);
        return null;
    }
};

export const toggleFavorite = async (userId, recipeId, isFavorited) => {
    try {
        if (isFavorited) {
            await axios.delete(`http://localhost:4000/favorites/${recipeId}`);
        } else {
            await axios.post('http://localhost:4000/favorites', { userId, recipeId });
        }
    } catch (error) {
        console.error(isFavorited ? 'Failed to unfavorite recipe:' : 'Failed to favorite recipe:', error);
    }
};
