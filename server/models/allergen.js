module.exports = (sequelize, DataTypes) => {
    return sequelize.define('allergen', {
        name: DataTypes.STRING,
    });
};
