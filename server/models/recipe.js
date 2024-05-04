module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        imageUrl: {
            type: DataTypes.STRING,
            field: 'imageurl'
        },
        ingredients: DataTypes.JSON,
        instructions: DataTypes.TEXT,
        userId: {
            type: DataTypes.INTEGER,
            field: 'userId'
        }
    });

    Recipe.associate = (models) => {
        Recipe.hasMany(models.Comment, { as: 'comments' });
        Recipe.belongsTo(models.User, { foreignKey: 'userId' });
    };

    return Recipe;
};
