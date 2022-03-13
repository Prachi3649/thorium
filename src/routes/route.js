const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memeController= require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



router.get("/getCitieWeather", weatherController.getCitieWeather)

//only temperature of London
router.get("/getTempOnly", weatherController.getTempOnly)

//all cities temp
router.get("/getSortedCities", weatherController.getSortedCities)
 
// memes_list
router.get("/memes", memeController.memesList)

//memes handler
router.post("/memesHandler",memeController.memesHandler)


module.exports = router;