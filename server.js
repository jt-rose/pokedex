const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PokemonCollections = require("./models/Pokemon");

const { Pokedex, MyTeam } = PokemonCollections;
// const Pokedex = PokemonCollections.Pokedex
// const MyTeam = PokemonCollections.MyTeam

const main = async () => {
  /* -------------------------------------------------------------------------- */
  /*                               initialize app                               */
  /* -------------------------------------------------------------------------- */
  const app = express();

  /* -------------------------------------------------------------------------- */
  /*                              connect database                              */
  /* -------------------------------------------------------------------------- */

  await mongoose.connect("mongodb://localhost:27017/pokemon");
  console.log("connected to mongoose");

  /* -------------------------------------------------------------------------- */
  /*                                 middleware                                 */
  /* -------------------------------------------------------------------------- */

  // set up body parser
  app.use(express.urlencoded({ extended: true }));

  // set up method override for PUT and DELETE methods
  app.use(methodOverride("_method"));

  // set up public assets
  app.use(express.static("public"));

  /* -------------------------------------------------------------------------- */
  /*                                set up routes                               */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                SHOW POKEMON                                */
  /* -------------------------------------------------------------------------- */
  // pokedex
  app.get("/pokedex", async (req, res) => {
    const pokemon = await Pokedex.find();
    res.render("pokedex.ejs", {
      title: "Pokedex",
      // pokemon: pokemon
      pokemon,
    });
  });

  // team
  app.get("/team", async (req, res) => {
    const myTeam = await MyTeam.find();
    res.render("team.ejs", {
      title: "PokeTeam",
      myTeam,
    });
  });

  // Show individual pokemon
  app.get("/pokedex/:id", async (req, res) => {
    const id = req.params.id;
    const pokemon = await Pokedex.findById(id);
    res.render("show.ejs", {
      title: "Pokemon",
      pokemon,
    });
  });

  /* -------------------------------------------------------------------------- */
  /*                             ADD POKEMON TO TEAM                            */
  /* -------------------------------------------------------------------------- */
  // New
  // submit form to add new pokemen to team
  app.post("/team/add/:id", (req, res) => {
    console.log("pokemon added to team");
    res.redirect("/");
  });

  /* -------------------------------------------------------------------------- */
  /*                         UPDATE POKEMON TEAM MEMBER                         */
  /* -------------------------------------------------------------------------- */
  // Edit
  // GET /pokemon/:id/edit
  app.get("/team/edit/:id", (req, res) => {
    res.render("edit.ejs", {
      title: "Edit Pokemon",
    });
  });

  // Update
  // PUT /pokemon/:id
  // form submission to edit pokemon team member
  app.put("/team/edit/:id", (req, res) => {
    console.log("submit update to team member");
    res.redirect("/");
  });

  /* -------------------------------------------------------------------------- */
  /*                         REMOVE POKEMON TEAM MEMBER                         */
  /* -------------------------------------------------------------------------- */
  // Destroy
  // DELETE /pokemon/:id
  // from submission to remove pokemon from team
  app.delete("/team/delete/:id", (req, res) => {
    console.log("team member removed");
    res.redirect("/");
  });

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
};

/* -------------------------------------------------------------------------- */
/*                                launch server                               */
/* -------------------------------------------------------------------------- */
main().catch((err) => console.log(err));
