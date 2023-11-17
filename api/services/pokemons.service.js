const sanitizedPokemon = require("../controllers/pokemons.controllers")
const axiosAPI = require("../axios.config")
class PokemonsService {

    constructor(){
        this.pokemons = [],
        this.generate()
    }

    async generate(){
        const response = await axiosAPI("/pokemon");
        const pokemons = await response.data.results;
        this.pokemons = await Promise.all(sanitizedPokemon(pokemons));
        return  this.pokemons
    }
   async find(){
        return this.pokemons
    }

    findOne(id){
        return this.pokemons.find( (el) => el.id == id)
    }

    create(){}

    update(){}

    delete(){}
}


module.exports = PokemonsService