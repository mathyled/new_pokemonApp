const DB_USER =process.env.DB_USER ||  "postgres";
const DB_HOST =process.env.DB_HOST ||  "localhost";
const DB_NAME = process.env.DB_NAME || "pokemons";
const DB_PASSWORD = process.env.DB_PASSWORD || "newpassword";
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;
// process.env.PORT || 3000
module.exports = {
  DB_USER,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_URL,
  PORT,
};
