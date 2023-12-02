require("dotenv").config();
const { DB_URL } = process.env;
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
// const app = require("express")()
const routerApi = require("./routes");
const sequelize = require("./db");


app.use(express.json());
routerApi(app);

const main = async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({force: true}) 
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main()