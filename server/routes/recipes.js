const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/", async (req, res) => {
  try {
    const recipes = await db.recipes.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "imageUrl",
        "ingredients",
        "instructions",
        "userId",
        "createdAt",
        "updatedAt",
      ],
    });
    res.json(recipes);
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const recipe = await db.recipes.create({ title, description, imageUrl });
    res.status(201).send(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const recipeId = req.params.id;
      const recipe = await db.recipes.findOne({ where: { id: recipeId }});
      if (!recipe) {
          return res.status(404).json({ message: 'Recipe not found' });
      }
      await recipe.destroy();
      res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
      console.error('Error deleting recipe:', error);
      res.status(500).json({ message: 'Error deleting recipe' });
  }
});

module.exports = router;
