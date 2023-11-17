const axios = require("axios");
const axiosAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });


  module.exports = axiosAPI
  