const express = require('express');
const router = express.Router();
const db = require('../db/db');

// get all users
router.get('/', async (req, res) => {
    const users = await db.users.findAll();
    res.json(users);
});

// create a new user
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await db.users.create({ username, password });
    res.status(201).json(user);
});

module.exports = router;
