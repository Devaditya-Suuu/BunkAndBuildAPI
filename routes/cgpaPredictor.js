const express = require("express");
const { predictcgpa , verdict } = require("../generators/cgpaGenerator")

const router = express.Router();

router.get("/", (req, res)=>{
    const study = Number(req.query.study) || 2;
    const socialmedia = Number(req.query.socialmedia) || 3;
    const sleep = Number(req.query.sleep) || 4;

    const cgpa = predictcgpa(study, socialmedia, sleep);

    res.json({
        study_hours : study,
        socialmedia_hours : socialmedia,
        sleep_hours : sleep,
        predicted_cgpa : cgpa,
        verdict : verdict(cgpa)
    })

})
module.exports = router;