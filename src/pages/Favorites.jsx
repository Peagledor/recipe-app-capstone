// // Favorites.jsx
// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/RecipeCard';
// import styles from './Favorites.module.css';
// import { getFavorites, toggleFavorite } from '../controllers/favoritesController';

// const Favorites = () => {
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         const loadFavorites = async () => {
//             const favoritesData = await getFavorites();
//             setFavorites(favoritesData);
//         };
//         loadFavorites();
//     }, []);

//     const handleFavoriteToggle = async (recipeId) => {
//         await toggleFavorite(recipeId);  // Adjust backend state
//         setFavorites(favorites.filter(recipe => recipe.id !== recipeId));  // Update local state
//     };

//     if (favorites.length === 0) {
//         return <p className={styles.noFavorites}>You have no favorite recipes.</p>;
//     }

//     return (
//         <div className={styles.favoritesContainer}>
//             {favorites.map((recipe) => (
//                 <RecipeCard
//                     key={recipe.id}
//                     recipe={recipe}
//                     onFavoriteToggle={handleFavoriteToggle}
//                     isFavorited={true}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Favorites;

// Favorites.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getFavorites, toggleFavorite } from '../controllers/favoritesController';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const loadFavorites = async () => {
            const favoritesData = await getFavorites();
            setFavorites(favoritesData);
        };
        loadFavorites();
    }, []);

    const handleFavoriteToggle = async (recipeId) => {
        await toggleFavorite(recipeId);
        setFavorites(favorites.filter(recipe => recipe.id !== recipeId)); // Remove from view upon unfavorite
    };

    return (
        <div>
            {favorites && favorites.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onFavoriteToggle={handleFavoriteToggle}
                    isFavorited={true} 
                />
            ))}
        </div>
    );
};

export default Favorites;
