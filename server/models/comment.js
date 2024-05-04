module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comments', {
        content: DataTypes.TEXT,
    });

    // Assuming you define associations here
    Comment.associate = (models) => {
        Comment.belongsTo(models.Recipe, { as: 'recipe' });
    };

    return Comment;
};