// src/pages/AddRecipe.jsx
import React, { useState } from "react";
import axios from "axios";
import styles from "./AddRecipe.module.css";

const AddRecipe = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecipe = { title, description, imageUrl };

    try {
      const response = await axios.post(
        "http://localhost:4000/recipes",
        newRecipe
      );
      console.log("Recipe added:", response.data);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }

    setTitle("");
    setDescription("");
    setImageUrl("");
    onClose(); // Close the modal after submission
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
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
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
