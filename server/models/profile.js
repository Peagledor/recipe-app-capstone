module.exports = (sequelize, DataTypes) => {
    return sequelize.define('profile', {
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        bio: {
            type: DataTypes.TEXT,
        },
        photoUrl: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'profiles',
    });
};