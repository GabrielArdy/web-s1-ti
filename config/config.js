module.exports = {
  development: {
    username: "root",
    password: "",
    database: "db_web_ti",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: console.log,
  },
  test: {
    username: "root",
    password: "",
    database: "your_database_name_test",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: "",
    database: "your_database_name_prod",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
};

