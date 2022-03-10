const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end

//router.post("/users/:userId/posts", auth.authentication, auth.authorisation, userController.postMessage)

router.put("/users/:userId", auth.validateToken, userController.updateUser)

router.get("/users/:userId", auth.validateToken, userController.getUserData)

router.delete("/users/:userId", auth.validateToken, userController.deleteUserData)


router.post('/users/:userId', auth.authorise, userController.postMessage)


module.exports = router;