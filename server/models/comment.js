module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comments', {
        content: DataTypes.TEXT,
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Recipe, { as: 'recipe', foreighKey: 'recipeId', onDelete: 'CASCADE' });
    };

    return Comment;
};