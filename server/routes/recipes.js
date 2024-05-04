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
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
