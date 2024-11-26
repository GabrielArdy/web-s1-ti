'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Get existing lecturer IDs
    const lecturers = await queryInterface.sequelize.query(
      'SELECT id FROM tb_dosen;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (!lecturers.length) {
      throw new Error('No lecturers found. Please seed lecturers first.');
    }

    const currentDate = new Date();
    const oneMonthFromNow = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
    const twoWeeksFromNow = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);

    const courses = [
      {
        title: 'Keamanan Sistem',
        lab: 'Lab Security',
        competencies: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Tools']
      },
      {
        title: 'Sistem Operasi',
        lab: 'Lab OS',
        competencies: ['Linux Administration', 'Shell Scripting', 'OS Concepts', 'Process Management', 'Memory Management']
      }
    ];

    const assistantJobs = courses.map((course, index) => ({
      job_title: `Asisten Praktikum ${course.title}`,
      job_description: JSON.stringify([
        `Mendampingi praktikum ${course.title}`,
        'Membantu mahasiswa dalam memahami konsep',
        'Menyiapkan materi praktikum mingguan',
        'Melakukan evaluasi hasil praktikum'
      ]),
      job_requirements: JSON.stringify([
        'Minimal semester 5',
        'IPK >= 3.00',
        `Nilai ${course.title} A`,
        'Menguasai bidang terkait',
        'Komunikatif dan dapat bekerja dalam tim'
      ]),
      location: course.lab,
      begin_date: currentDate,
      end_date: oneMonthFromNow,
      apply_deadline: twoWeeksFromNow,
      competency: JSON.stringify(course.competencies),
      quota: Math.floor(Math.random() * 3) + 1,
      lecturer_id: lecturers[index % lecturers.length].id,
      createdAt: currentDate,
      updatedAt: currentDate
    }));

    return queryInterface.bulkInsert('tb_lowongan_asisten', assistantJobs);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_lowongan_asisten', null, {});
  }
};