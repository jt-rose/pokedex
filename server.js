const express = require("express");
const methodOverride = require("method-override");

const main = async () => {
  /* -------------------------------------------------------------------------- */
  /*                               initialize app                               */
  /* -------------------------------------------------------------------------- */
  const app = express();

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
  app.get("/pokedex", (req, res) => {
    res.render("pokedex.ejs", {
      title: "Pokedex",
    });
  });

  // team
  app.get("/team", (req, res) => {
    res.render("team.ejs", {
      title: "PokeTeam",
    });
  });

  // Show individual pokemon
  app.get("/pokedex/:id", (req, res) => {
    res.render("show.ejs", {
      title: "Pokemon",
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
