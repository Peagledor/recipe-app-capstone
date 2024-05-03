const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
    const recipes = await db.recipes.findAll();
    res.json(recipes);
});

router.post('/', async (req, res) => {
    const { title, description, imageUrl } = req.body;
    const recipe = await db.recipes.create({ title, description, imageUrl });
    res.status(201).json(recipe);
});

module.exports = router;
