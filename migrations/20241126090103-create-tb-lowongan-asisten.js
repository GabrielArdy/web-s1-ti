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
        type: Sequelize.STRING(255),
        allowNull: false
      },
      job_description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      job_requirements: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      begin_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      apply_deadline: {
        type: Sequelize.DATE,
        allowNull: false
      },
      competency: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      quota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      lecturer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tb_dosen',
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
      tableName: 'tb_lowongan_asisten',
      freezeTableName: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_lowongan_asisten');
  }
};