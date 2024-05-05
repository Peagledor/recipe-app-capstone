import axios from 'axios';

export const getRecipes = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/recipes`);
        return response.data;
    } catch (error) {
        console.error('Failed to get recipes:', error.response ? error.response.data : error.message);
        return [];
    }
};

export const addRecipe = async (recipe) => {
    try {
        const response = await axios.post(`http://localhost:4000/recipes`, recipe, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add recipe:', error.response ? error.response.data : error.message);
        return null;
    }
};


export const deleteRecipe = async (recipeId) => {
    try {
        const response = await axios.delete(`http://localhost:4000/recipes/${recipeId}`);
        return response.data; 
    } catch (error) {
        console.error('Failed to delete recipe:', error);
        throw error;  
    }
};