require("dotenv").config();
const { port } = process.env;
const express = require('express');
const app = express();
// const app = require("express")()
const routerApi = require("./routes");
const sequelize = require("./db");

// app.use(express.json());
routerApi(app);

const main = async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({force: true}) 
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main()