const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
