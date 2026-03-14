const express = require("express");
const cors = require("cors");
const excuseRoute = require("./routes/exuses");
const lastNightRoute = require("./routes/lastNight");
const roastRoute = require("./routes/roast");
const cgpaPredictor = require("./routes/cgpaPredictor")


const app = express();
app.use(cors());
app.use(express.json());

app.use("/excuse", excuseRoute);
app.use("/lastNight", lastNightRoute);
app.use("/roast", roastRoute);
app.use("/cgpaPredictor", cgpaPredictor)

app.get("/", (req, res) => {
    res.json({
        message: "welcome to engineering student api"
    });
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})