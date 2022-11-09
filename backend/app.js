const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Requête envoyé");
  res.json({ message: "La requête à bien été envoyé en JSON ! " });
});

module.exports = app;
