const db = require("../models");

exports.getAllBlocs = (req, res, next) => {
  db.Bloc.findAll()
    .then((blocs) => {
      res.send(blocs);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createBloc = (req, res, next) => {
  db.Bloc.create({
    tags: req.body.tags,
    difficulty: req.body.difficulty,
    userId: req.body.userId,
    image: req.body.image,
  })
    .then(() => {
      res.status(201).json({ message: "Bloc enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
