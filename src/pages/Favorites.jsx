// src/pages/Favorites.jsx
import React, { useState, useEffect } from 'react';
import { getFavorites } from '../controllers/favoritesController';
import RecipeCard from '../components/RecipeCard'; // Ensure valid import path

const Favorites = ({ userId }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const data = await getFavorites(userId);
            setFavorites(data);
        };

        fetchFavorites();
    }, [userId]);

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map(favorite => (
                <RecipeCard key={favorite.recipeId} recipe={favorite.recipe} /> // Ensure valid recipe structure
            ))}
        </div>
    );
};

export default Favorites;