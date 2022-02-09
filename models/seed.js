const mongoose = require("mongoose");
const pokedata = require("./pokedexData");
const pokemon = require("./Pokemon");

const seedDatabase = async () => {
  // connect to database
  await mongoose.connect("mongodb://localhost:27017/pokemon");
  console.log("connected to mongoose");

  // clear any previous data
  await pokemon.Pokedex.deleteMany({});
  await pokemon.Pokedex.find().then((pk) =>
    console.log("previous pokedex data reset: " + (pk.length === 0))
  );
  await pokemon.MyTeam.deleteMany({});
  await pokemon.MyTeam.find().then((pk) =>
    console.log("previous team data reset: " + (pk.length === 0))
  );

  // insert all pokemon into pokedex collection
  await pokemon.Pokedex.insertMany(pokedata);
  await pokemon.Pokedex.find().then((pk) =>
    console.log("All 151 pokemon are in the DB: " + (pk.length === 151))
  );

  // insert Charmander to our starting team
  const charmander = pokedata.find((pokemon) => pokemon.name === "Charmander");
  await pokemon.MyTeam.insertMany([charmander]);
  await pokemon.MyTeam.findOne().then((pk) =>
    console.log("Charmander is in your team: " + (pk.name === "Charmander"))
  );

  await mongoose.disconnect();
  console.log("mongoose disconnected");
};

seedDatabase().catch((err) => console.log(err));
