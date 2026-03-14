const express = require("express");
const generateRoast = require("../generators/roastGenerator");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    roast: generateRoast()
  });
});

module.exports = router;
