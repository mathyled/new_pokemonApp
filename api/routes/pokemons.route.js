const PokemonsService = require("../services/pokemons.service");
const express = require("express");
const router = express.Router();
const service = new PokemonsService();

router.get("/", async (req, res) => {
  try {
    const pokemons = await service.find();
    console.log(pokemons);
    res.json({ pokemons: pokemons });
  } catch (error) {
    console.error("Error al obtener los pokemons:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await service.findOne(id);
    pokemon ?? res.status(201).json(pokemon);
  } catch (error) {
    res.status(404).end();
  }
});

module.exports = router;
