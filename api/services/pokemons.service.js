// const sanitizePokemonList = require("../controllers/pokemons.controllers")
// const axiosAPI = require("../axios.config")
// class PokemonsService {

//     constructor(){
//         this.pokemons = [],
//         this.generate()
//     }

//     async generate(){
//         const pokemons =  (await axiosAPI("/pokemon/?limit=200")).data.results;
//         this.pokemons = await Promise.all(sanitizePokemonList(pokemons));
//         return  this.pokemons
//     }
//    async find(){
//         return this.pokemons
//     }
//     async findByName(name){
//         return this.pokemons.filter((p) => p.name.includes(name));
//     }

//     findOne(id){
//         return this.pokemons.find( (el) => el.id == id)
//     }

//     create(){}

//     update(){}

//     delete(){}
// }


// module.exports = PokemonsService