require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require("./config")
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
