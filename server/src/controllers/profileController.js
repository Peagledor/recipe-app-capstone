import axios from 'axios';

export const getProfile = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/profiles/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        return {};
    }
};

export const updateProfile = async (userId, profile) => {
    try {
        await axios.put(`http://localhost:4000/profiles/${userId}`, profile);
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};
