import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../controllers/recipesController'; // Adjust this path as needed

function AddRecipe({ onRecipeAdded }) {
    const user = useSelector(state => state.user.user);  // Access user information from Redux state
    const navigate = useNavigate();
    
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
            ingredients, 
            instructions, 
            userId: user ? user.id : null  // Use user ID from Redux state, ensure user object has an id property
        };

        try {
            await addRecipe(newRecipe);
            console.log("Recipe added successfully");
            setTitle('');
            setDescription('');
            setImageUrl('');
            setIngredients('');
            setInstructions('');
            onRecipeAdded();
            navigate('/recipes');
        } catch (error) {
            console.error("Error adding recipe:", error);
        }
    };

    if (!user) {
        return <p>Please log in to post recipes.</p>;
    }

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


// import  { useState } from "react";
// import styles from "./AddRecipe.module.css";
// import { addRecipe } from '../controllers/recipesController'; // Reference add function

// const AddRecipe = ({ isOpen, onClose, userId, navigate }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newRecipe = { title, description, imageUrl, userId }; // Include userId
//     try {
//       await addRecipe(newRecipe); // Call add function

//       console.log("Recipe added successfully");

//       setTitle("");
//       setDescription("");
//       setImageUrl("");

//       onClose(); // Close the modal after submission
//       navigate('/recipes'); // Redirect to the recipes page after submission
//     } catch (error) {
//       console.error("Error adding recipe:", error);
//     }
//   };
//   if (!isOpen) return null; // Don't render if modal is not open
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <h2>Add a Recipe</h2>

//         <form onSubmit={handleSubmit}>
//           <label>
//             Title:
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </label>

//           <label>
//             Description:
//             <textarea
//               value={description}
//               onChange={((e) => setDescription(e.target.value))}
//               required
//             />
//           </label>

//           <label>
//             Image URL:
//             <input
//               type="text"
//               value={imageUrl}
//               onChange={((e) => setImageUrl(e.target.value))}
//             />
//           </label>

//           <button type="submit">Submit Recipe</button>
//         </form>

//         <button onClick={onClose} className={styles.closeButton}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;
