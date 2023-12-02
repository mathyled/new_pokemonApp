const { DB_URL, PORT } = require("./config");
const express = require("express");
const app = express();
// const app = require("express")()
const routerApi = require("./routes");
const sequelize = require("./db");
const pg = require("pg");

const pool = new pg.Pool({
  connectionString: DB_URL,
  // ssl: true
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (error) {
    console.error("error #%d", error);
  }
});

app.use(express.json());
routerApi(app);

const main = async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
