const { Sequelize } = require('sequelize');

// creates sequelize instance
const sequelize = new Sequelize('postgres://postgres.knayqpquowdfjfiibstk:afcTBXm65&Wm!kc@aws-0-us-west-1.pooler.supabase.com:5432/postgres', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

// creates object to hold sequelize exports
const db = {};

// assigns sequelize constructor and sequelize instance to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// model imports
db.users = require('../models/user')(sequelize, Sequelize);
db.recipes = require('../models/recipe')(sequelize, Sequelize);
db.comments = require('../models/comment')(sequelize, Sequelize);
db.allergens = require('../models/allergen')(sequelize, Sequelize);

// associations 
db.recipes.belongsTo(db.users);
db.users.hasMany(db.recipes);
db.comments.belongsTo(db.recipes);
db.recipes.hasMany(db.comments);

// many-to-many relationship between recipes and allergens
db.recipes.belongsToMany(db.allergens, { through: 'Recipe_Allergens' });
db.allergens.belongsToMany(db.recipes, { through: 'Recipe_Allergens' });


module.exports = db;
