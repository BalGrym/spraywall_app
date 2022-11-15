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
  console.log(req.body);
  db.Bloc.create({
    tags: req.body.tags,
    difficulty: req.body.difficulty,
    userId: req.body.userId,
  })
    .then((blocCreated) => res.send(blocCreated))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
