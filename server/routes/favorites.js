const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/:userId', async (req, res) => {
    const {userId} = req.params;

    try{
        const favorites = await db.favorites.findAll({where: {userId}});
        res.json(favorites);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post('/', async(req, res) => {
    const {userId, recipeId} = req.body;

    try{
        const favorite = await db.favorite.create({userId, recipeId});
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        await db.favorites.destroy({where: 'Favorite deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

module.exports = router;