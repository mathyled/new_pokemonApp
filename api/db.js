require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_URL } = process.env;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pokemons", DB_USER, DB_PASSWORD, {
  host: DB_URL || DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
