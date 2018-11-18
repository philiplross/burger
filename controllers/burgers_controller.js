var express = require("express");

var router = express.Router();

var cat = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

