const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user');

const Announcement = sequelize.define('tb_pengumuman', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
    },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  author: {
    type: DataTypes.STRING,
    references: {
        model: User,
        key: 'id'
    },
    allowNull: false,
    
  }
}, {
    timestamps: true,
});

User.hasMany(Announcement, {
    foreignKey: 'id',
    as: 'author'
});

Announcement.belongsTo(User, {
    foreignKey: 'id',
    as: 'author'
});


module.exports = Announcement;
