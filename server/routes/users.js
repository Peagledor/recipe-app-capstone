const express = require('express');
const router = express.Router();
const db = require('../db/db');

// get all users
router.get('/login', async (req, res) => {
    const users = await db.users.findAll();
    res.json(users);
});

// create a new user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await db.users.create({ username, password });
    res.status(201).json(user);
});

module.exports = router;
