module.exports = (sequelize, DataTypes) => {
    return sequelize.define('favorite', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        recipeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipes',
                key: 'id',
            },
        },
    }, {
        tableName: 'favorites',
    });
};