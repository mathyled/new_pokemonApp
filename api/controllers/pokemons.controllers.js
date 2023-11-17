const axios = require("axios");

const sanitizedPokemon = (pokemons) => {
  pokemons = pokemons.map(async (pokemon) => {
    const { data } = await axios(pokemon.url);
    const { id, name, height, weight, types } = data;

    return {
      id,
      name,
      height,
      weight,
      types: types.map((t) => t.type.name),
    };
  });

  return pokemons;
};

module.exports = sanitizedPokemon;
