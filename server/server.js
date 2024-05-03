const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');

const app = express();
app.use(bodyParser.json());

// routes imports
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');

// routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});
