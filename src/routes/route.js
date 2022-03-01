const express = require('express');
const router = express.Router();
const bookModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/book",async function(req, res){
 const data =req.body
 const saveData = await bookModel.create(data)
 res.send({message:saveData})
})

router.get("/booklist",async function(req, res){
    const saveData = await bookModel.find()
    res.send({message:saveData})
   })

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;