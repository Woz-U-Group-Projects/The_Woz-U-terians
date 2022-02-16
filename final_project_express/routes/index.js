var express = require("express");
var router = express.Router();
var staticModels = require('../staticModels/phones')


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/staticPhones", function (req, res, next) {
  res.send(JSON.stringify(staticModels.phone));
});

module.exports = router;
