// seeders/20241126064245-demo-announcements.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const announcements = [];
    const categories = ['Academic', 'Event', 'Competition', 'Scholarship', 'Internship'];
    
    for (let i = 1; i <= 20; i++) {
      announcements.push({
        title: `${categories[i % 5]} Announcement ${i}`,
        description: `Important announcement regarding ${categories[i % 5].toLowerCase()} activities for students of Faculty of Information Technology`,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 This is detailed content for announcement number ${i}.`,
        image: `announcement${i}.jpg`,
        author: i % 2 + 1, // Alternates between author ID 1 and 2
        createdAt: new Date(2024, 0, i), // Creates dates from Jan 1 to Jan 20, 2024
        updatedAt: new Date(2024, 0, i)
      });
    }

    return queryInterface.bulkInsert('tb_pengumuman', announcements);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_pengumuman', null, {});
  }
};