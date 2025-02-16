const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_web_ti', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;
