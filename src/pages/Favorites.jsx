import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import { getFavorites } from '../controllers/favoritesController';

import RecipeCard from '../components/RecipeCard'; 

const Favorites = () => {
    const userData = useSelector((state) => state.user.userData)
        const userId = userData?.id
        console.log(userId)

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            if(!userId){
                console.error("User ID is missing")
                return;
            }
            const data = await getFavorites(userId);
            setFavorites(data);
        };

        fetchFavorites();
    }, [userId]);

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map(favorite => (
                <RecipeCard key={favorite.recipeId} recipe={favorite.recipe} /> 
            ))}
        </div>
    );
};

export default Favorites;