// src/pages/AddRecipe.jsx
import React, { useState } from "react";
import styles from "./AddRecipe.module.css";
import { addRecipe } from '../controllers/recipesController'; // Reference add function

const AddRecipe = ({ isOpen, onClose, userId, navigate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecipe = { title, description, imageUrl, userId }; // Include userId

    try {
      await addRecipe(newRecipe); // Call add function

      console.log("Recipe added successfully");

      setTitle("");
      setDescription("");
      setImageUrl("");

      onClose(); // Close the modal after submission
      navigate('/recipes'); // Redirect to the recipes page after submission
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add a Recipe</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              onChange={((e) => setDescription(e.target.value))}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={((e) => setImageUrl(e.target.value))}
            />
          </label>

          <button type="submit">Submit Recipe</button>
        </form>

        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;
