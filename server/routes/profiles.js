const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/:userId', async (req, res) => {
    const {userId} = req.params;

    try{
        const profile = await db.profiles.findOne({where: {userId}});
        res.json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post('/', async (req, res) => {
    const {userId, name, age, bio, photoUrl} = req.body;
    try {
        const profile = await db.profiles.create({userId, name, age, brio, photoUrl});
        res.status(200). json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.put('/:userId', async (req, res) => {
    const {userId} = req.params;
    const {name, age, bio, photoUrl} = req.body;

    try{
        const profile = await db.profiles.update({name, age, bio, photoUrl}, {where: {userId}});
        res.json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;