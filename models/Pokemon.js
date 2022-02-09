const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  type: [{ type: String, required: true }],
  stats: {
    hp: { type: String, required: true },
    attack: { type: String, required: true },
    defense: { type: String, required: true },
    spattack: { type: String, required: true },
    spdefense: { type: String, required: true },
    speed: { type: String, required: true },
  },
  moves: {
    level: [
      {
        learnedat: { type: String },
        name: { type: String, required: true },
        gen: { type: String, required: true },
      },
    ],
    tmhm: [
      {
        learnedat: { type: String },
        name: { type: String, required: true },
        gen: { type: String, required: true },
      },
    ],
    egg: [
      {
        name: { type: String, required: true },
        gen: { type: String, required: true },
      },
    ],
    tutor: [
      {
        name: { type: String, required: true },
        gen: { type: String, required: true },
      },
    ],
    gen34: [
      {
        name: { type: String, required: true },
        method: { type: String, required: true },
      },
    ],
  },
  damages: {
    normal: { type: String, required: true },
    fire: { type: String, required: true },
    water: { type: String, required: true },
    electric: { type: String, required: true },
    grass: { type: String, required: true },
    ice: { type: String, required: true },
    fight: { type: String, required: true },
    poison: { type: String, required: true },
    ground: { type: String, required: true },
    flying: { type: String, required: true },
    psychic: { type: String, required: true },
    bug: { type: String, required: true },
    rock: { type: String, required: true },
    ghost: { type: String, required: true },
    dragon: { type: String, required: true },
    dark: { type: String, required: true },
    steel: { type: String, required: true },
  },
  misc: {
    sex: {
      male: String,
      female: String,
    },
    abilities: {
      normal: [{ type: String }],
      hidden: [{ type: String }],
    },
    classification: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    capturerate: { type: String, required: true },
    eggsteps: { type: String, required: true },
    expgrowth: { type: String, required: true },
    happiness: { type: String, required: true },
    evpoints: [{ type: String, required: true }],
    fleeflag: { type: String, required: true },
    entreeforestlevel: { type: String, required: true },
  },
});

const Pokedex = mongoose.model("Pokemon", pokemonSchema);
const MyTeam = mongoose.model("MyTeam", pokemonSchema);

module.exports = {
  Pokedex,
  MyTeam,
};
