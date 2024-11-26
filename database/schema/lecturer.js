const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user');

const Lecturer = sequelize.define('tb_dosen', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tb_dosen',
    tableName: 'tb_dosen',
    freezeTableName: true,
    timestamps: true

});

User.hasOne(Lecturer, {
    foreignKey: 'userId',
    as: 'lecturer'
});

Lecturer.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});