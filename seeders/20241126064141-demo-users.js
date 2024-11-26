'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    // Create 5 admin users
    for (let i = 1; i <= 5; i++) {
      users.push({
        username: `admin${i}`,
        email: `admin${i}@fti.uksw.edu`,
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Create 15 regular users
    for (let i = 1; i <= 15; i++) {
      users.push({
        username: `user${i}`,
        email: `user${i}@fti.uksw.edu`,
        password: hashedPassword,
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('tb_user', users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_user', null, {});
  }
};