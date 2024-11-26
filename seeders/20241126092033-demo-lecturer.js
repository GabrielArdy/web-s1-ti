'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lecturers = [];
    const currentDate = new Date();
    const usedCombinations = new Set();

    // Sample names for realistic data
    const firstNames = ['Adi', 'Budi', 'Citra', 'Dewi', 'Eka', 'Fajar', 'Gita', 'Hadi', 'Indah', 'Joko'];
    const lastNames = ['Pratama', 'Wijaya', 'Sari', 'Putri', 'Saputra', 'Nugroho', 'Wulandari', 'Susanto', 'Kusuma', 'Santoso'];

    // Generate 20 unique lecturers
    let i = 1;
    while (lecturers.length < 20) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const combination = `${firstName}-${lastName}`;

      if (!usedCombinations.has(combination)) {
        usedCombinations.add(combination);
        const nip = `19800101${String(i).padStart(4, '0')}`;
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@fti.uksw.edu`;

        lecturers.push({
          nip: nip,
          name: `${firstName} ${lastName}`,
          email: email,
          userId: i, // Link to existing users
          createdAt: currentDate,
          updatedAt: currentDate
        });
        i++;
      }
    }

    return queryInterface.bulkInsert('tb_dosen', lecturers);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_dosen', null, {});
  }
};