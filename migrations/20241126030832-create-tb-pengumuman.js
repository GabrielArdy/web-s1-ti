'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pengumuman', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_user',
          key: 'id'
        },
      },
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_pengumuman');
  }
};
