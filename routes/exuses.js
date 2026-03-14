const express = require("express");
const generateExcuse = require("../generators/excusesGenerator");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    excuse: generateExcuse()
  });
});

module.exports = router;