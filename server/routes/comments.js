const express = require('express');
const router = express.Router();
const db = require('../db/db');

// get all comments for a recipe
router.get('/recipes/:recipeId/comments', async (req, res) => {
    const { recipeId } = req.params;
    try {
        const comments = await db.Comment.findAll({
            where: { recipeId: recipeId },
<<<<<<< HEAD
            include: [{ model: db.User, attributes: ['username'] }]  
=======
            include: [{ model: db.User, attributes: ['username'] }]  // Include the User model
>>>>>>> c54a6879b756f29d2a75a512e6adf11de0c34417
        });
        res.json(comments);
    } catch (error) {
        console.error("Failed to fetch comments:", error);
        res.status(500).send("Internal Server Error");
    }
});

// router.get('/recipes/:recipeId/comments', async (req, res) => {
//     const { recipeId } = req.params;
//     const comments = await db.comments.findAll({
//         where: { recipeId }
//     });
//     res.json(comments);
// });

// post a comment on a recipe
router.post('/', async (req, res) => {
    const { content, recipeId, userId } = req.body;
    try {
      const comment = await db.comments.create({ content, recipeId, userId });
      res.status(201).json(comment);
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Failed to add comment' });
    }
  });

<<<<<<< HEAD
=======
// router.post('/', async (req, res) => {
//     const { content, recipeId, userId } = req.body;
//     const comment = await db.comments.create({ content, recipeId, userId });
//     res.status(201).json(comment);
// });
>>>>>>> c54a6879b756f29d2a75a512e6adf11de0c34417

module.exports = router;
