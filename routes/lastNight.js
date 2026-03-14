const express = require("express");
const generateLastNight = require("../generators/lastNightGenerator");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    lastNight: generateLastNight()
  });
});

module.exports = router;
