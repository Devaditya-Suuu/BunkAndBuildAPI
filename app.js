const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const excuseRoute = require("./routes/exuses");
const lastNightRoute = require("./routes/lastNight");
const roastRoute = require("./routes/roast");
const cgpaPredictor = require("./routes/cgpaPredictor");

const app = express();

app.use(cors());
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    error: "Too many requests. Please try again later."
  }
});

app.use("/excuse", apiLimiter, excuseRoute);
app.use("/lastNight", apiLimiter, lastNightRoute);
app.use("/roast", apiLimiter, roastRoute);
app.use("/cgpaPredictor", apiLimiter, cgpaPredictor);

app.get("/", (req, res) => {
  res.json({
    message: "welcome to engineering student api",
    use_endpoints : "/excuse, /lastNight, /roast, /cgpaPredictor"
  });
});

module.exports = app;
