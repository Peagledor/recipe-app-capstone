module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Recipe', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        imageUrl: DataTypes.STRING,
    });
};
