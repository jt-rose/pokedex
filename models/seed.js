const mongoose = require("mongoose");
const pokedata = require("./pokedexData");
const pokemon = require("./Pokemon");

// connect to mongoose
mongoose.connect("mongodb://localhost:27017/pokedex", () => {
  console.log("mongoose connected");
});

// insert all pokemon into pokedex collection
pokemon.Pokedex.insertMany(pokedata);

// insert charmander to our starting team
const charmander = pokedata.find((pokemon) => pokemon.name === "Charmander");
pokemon.MyTeam.insertMany([charmander]);
