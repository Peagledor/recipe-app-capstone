import axios from 'axios';

export const getComments = async (recipeId) => {
    try {
        const response = await axios.get(`http://localhost:4000/comments/${recipeId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};

export const addComment = async (comment) => {
    try {
        const response = await axios.post('http://localhost:4000/comments', comment);
        return response.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        return null;
    }
};

export const deleteComment = async (commentId) => {
    try {
        await axios.delete(`http://localhost:4000/comments/${commentId}`);
    } catch (error) {
        console.error('Error deleting comment:', error);
    }
};
