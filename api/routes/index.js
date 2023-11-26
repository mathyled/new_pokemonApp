const router = require("express").Router();
const express = require('express');
const pokemonsRouter = require("./pokemons.route");
const typesRouter = require("./types.route");

const routerApi = (app) => {
  app.use(express.json());
  app.use("/api/v1", router);
  router.use("/pokemons", pokemonsRouter);
  router.use("/types", typesRouter);
};


module.exports = routerApi;
