import axios from 'axios'

export const getFavorites = async (userId) => {
    try {
        console.log("controller:", userId)
        const response = await axios.get(`http://localhost:4000/favorites/${userId}`); // Fetch user favorites
        return response.data;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
};

export const toggleFavorite = async (userId, recipeId, isFavorited) => {
    try {
        if (isFavorited) {
            await removeFavorite(userId, recipeId);
        } else {
            await addFavorite(userId, recipeId);
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
    }
};

export const addFavorite = async (userId, recipeId) => {
    try {
        const response = await axios.post('http://localhost:4000/favorites', { userId, recipeId });
        return response.data;
    } catch (error) {
        console.error('Error adding favorite:', error);
        return null;
    }
};

export const removeFavorite = async (id) => {
    try {
        await axios.delete(`http://localhost:4000/favorites/${id}`);
    } catch (error) {
        console.error('Error removing favorite:', error);
    }
};
