// migrations/YYYYMMDDHHMMSS-create-tb-lowongan-asisten.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_lowongan_asisten', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      job_title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      job_description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      lecturer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_lecturer',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      freezeTableName: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_lowongan_asisten');
  }
};