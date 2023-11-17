const express = require("express");
const router = express.Router();
const pokemonsRouter = require("./pokemons.route");

const routerApi = (app) => {
  app.use("/api/v1", router);
  router.use("/pokemons", pokemonsRouter);
};

module.exports = routerApi;
