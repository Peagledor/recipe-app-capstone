module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Allergen', {
        name: DataTypes.STRING,
    });
};
