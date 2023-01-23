var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/contact-me", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../contact-me.html"));
});

router.get("/about", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../about.html"));
});

module.exports = router;
