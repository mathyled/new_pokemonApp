const axios = require("axios");
const axiosAPI = require("../axios.config");
const Pokemon = require("../models/Pokemon");

const sanitizePokemonList = (pokemons) => {
  pokemons = pokemons.map(async (pokemon) => {
    const { data } = await axios(pokemon.url);
    const { id, name, height, weight, types, stats, sprites } = data;

    return {
      id,
      name,
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      speed: stats[5].base_stat,
      image: sprites.front_default,
      height,
      weight,
      types: types.map((t) => t.type.name),
    };
  });

  return pokemons;
};
const fetchPokemonData = async () => {
  try {
    const response = await axiosAPI("/pokemon/?limit=200");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

// Handlers functions
const getPokemosApi = async () => {
  let pokemons = await fetchPokemonData();
  pokemons = await Promise.all(sanitizePokemonList(pokemons));
  return pokemons;
};

const getPokemosDB = async () => {
  const pokemons = await Pokemon.findAll();
  console.log(pokemons);
  return pokemons;
};

// Services functions
const getPokemons = async () => {
  try {
    const pokemonsApi = await getPokemosApi();
    const pokemonsDB = await getPokemosDB();
    const pokemons = [...pokemonsApi, ...pokemonsDB];
    return pokemons;
  } catch (error) {
    // Handle errors if needed
    console.error("Error getting Pokémon data:", error);
    throw error;
  }
};

module.exports = getPokemons;
