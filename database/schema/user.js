// schema/user.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
    }
}, {
    sequelize,
    modelName: 'tb_user',
    tableName: 'tb_user',
    freezeTableName: true,
    timestamps: true
});

module.exports = User;