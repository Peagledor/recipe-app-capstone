module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comment', {
        content: DataTypes.TEXT,
    });
};
