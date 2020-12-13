var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/burgers", function(req, res) {
  burger.selectAll()
});

router.post("/burgers/create", function(req, res) {
  burger.createOne(req.body.burger_name)
});


module.exports = router;
