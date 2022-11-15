const express = require("express");
const router = express.Router();

const blocCtrl = require("../controllers/bloc");

router.get("/", blocCtrl.getAllBlocs);
router.post("/", blocCtrl.createBloc);

module.exports = router;
