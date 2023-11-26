const axiosAPI = require("../axios.config");
const getPokemons = require("../controllers/pokemons.controllers");
const Pokemon = require("../models/Pokemon");
const Type = require("../models/Type");
const PokemonsService = require("../services/pokemons.service");
const express = require("express");
const router = express.Router();
// const service = new PokemonsService();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    // find
    let pokemons = await getPokemons();

    // findByName
    const results = name
      ? pokemons.filter((p) => p.name.includes(name))
      : pokemons;
    // const result = name ? await service.findByName(name) : await service.find();

    if (results.length) return res.json(results);
    return res.status(404).json({ message: "Not found" });
  } catch (error) {
    console.error("Error al obtener los pokemons:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let pokemons = await getPokemons();
    const pokemon = pokemons.find((el) => el.id == id);
    // console.log(pokemon);
    pokemon
      ? res.status(201).json(pokemon)
      : res.status(404).json({
          message: "Not found",
        });
  } catch (error) {
    res.status(404).end();
  }
});

router.post("/create", async (req, res) => {
  let {
    name,
    hp,
    attack,
    defense,
    speed,
    weight,
    height,
    img,
    types,
    createdInDb,
  } = req.body;

  let pokemonCreated = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    weight,
    height,
    img,
    createdInDb,
  });

  const typesDB = await Type.findAll({ where: { name: types } });

  pokemonCreated.addType(typesDB)
  res.send("Pokemon created successfully");
});

module.exports = router;
