const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/db');

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000' // Allow only the React development server to make requests
}));

// routes imports
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');
const commentRoutes = require('./routes/comments');
const favoriteRoutes = require('./routes/favorites');
const profileRoutes = require('./routes/profiles');

// routes
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/profiles', profileRoutes)

db.sequelize.sync().then(() => {
    app.listen(4000, () => console.log('Server running on port 4000'));
});
