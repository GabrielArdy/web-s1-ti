'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tb_pengumuman', [
      {
        title: 'First Announcement',
        description: 'This is the first announcement description',
        content: 'Detailed content for the first announcement',
        image: 'announcement1.jpg',
        author: 1, // References admin user
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Second Announcement',
        description: 'This is the second announcement description',
        content: 'Detailed content for the second announcement',
        image: 'announcement2.jpg',
        author: 2, // References user1
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_pengumuman', null, {});
  }
};
