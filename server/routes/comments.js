const express = require('express');
const router = express.Router();
const db = require('../db/db');

// get all comments for a recipe
router.get('/:recipeId', async (req, res) => {
    const { recipeId } = req.params;
    const comments = await db.comments.findAll({
        where: { recipeId }
    });
    res.json(comments);
});

// post a comment on a recipe
router.post('/', async (req, res) => {
    const { content, recipeId, userId } = req.body;
    const comment = await db.comments.create({ content, recipeId, userId });
    res.status(201).json(comment);
});

module.exports = router;
