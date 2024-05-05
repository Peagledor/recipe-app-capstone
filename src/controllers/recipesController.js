import axios from 'axios';

// const API_BASE_URL = 'http://localhost:4000'; // Centralize the API base URL

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

// export const toggleFavorite = async (userId, recipeId, isFavorited) => {
//     try {
//         const url = `http://localhost:4000/favorites/${recipeId}`;
//         if (isFavorited) {
//             await axios.delete(url);
//         } else {
//             await axios.post(url, { userId, recipeId });
//         }
//     } catch (error) {
//         console.error(isFavorited ? 'Failed to unfavorite recipe:' : 'Failed to favorite recipe:', error.response ? error.response.data : error.message);
//     }
// };



// import axios from 'axios';

// export const getRecipes = async () => {
//     try {
//         const response = await axios.get('http://localhost:4000/recipes');
//         return response.data;
//     } catch (error) {
//         console.error('Failed to get recipes:', error);
//         return [];
//     }
// };

// export const addRecipe = async (recipe) => {
//     try {
//         const response = await axios.post('http://localhost:4000/recipes', recipe);
//         return response.data;
//     } catch (error) {
//         console.error('Failed to add recipe:', error);
//         return null;
//     }
// };

// export const toggleFavorite = async (userId, recipeId, isFavorited) => {
//     try {
//         if (isFavorited) {
//             await axios.delete(`http://localhost:4000/favorites/${recipeId}`);
//         } else {
//             await axios.post('http://localhost:4000/favorites', { userId, recipeId });
//         }
//     } catch (error) {
//         console.error(isFavorited ? 'Failed to unfavorite recipe:' : 'Failed to favorite recipe:', error);
//     }
// };
