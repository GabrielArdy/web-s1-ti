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
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'id'
    },
    allowNull: false,
    
  }
}, {
  sequelize,
  modelName: 'tb_pengumuman',
  tableName: 'tb_pengumuman',
  freezeTableName: true,
  timestamps: true
});

User.hasMany(Announcement, {
  foreignKey: 'author',  // Changed from 'id'
  as: 'announcements'
});

Announcement.belongsTo(User, {
  foreignKey: 'author',  // Changed from 'id'
  as: 'user'
});


module.exports = Announcement;
