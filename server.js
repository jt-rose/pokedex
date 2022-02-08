const express = require("express");

const main = async () => {
  /* -------------------------------------------------------------------------- */
  /*                               initialize app                               */
  /* -------------------------------------------------------------------------- */
  const app = express();

  // set up body parser
  app.use(express.urlencoded({ extended: true }));

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
    res.send("show pokedex");
  });

  // team
  app.get("/team", (req, res) => {
    res.send("show team");
  });

  // Show individual pokemon
  app.get("/pokedex/:id", (req, res) => {
    res.send("show individual pokemon");
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
    res.send("edit form for pokemon team member (but not for pokedex)");
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
