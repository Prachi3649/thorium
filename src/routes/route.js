const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const middleware= require("../middleware/isfreeAppuser")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//user 
router.post("/createUser",middleware.isFreeAppUserMiddleware,UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



// product 
router.post("/createProduct", productController.createProduct  )

router.get("/getProductData", productController.getProductData)

//order
router.post("/createOrder",middleware.isFreeAppUserMiddleware, orderController.createOrder  )

router.get("/getOrderData", orderController.getOrderData)


module.exports = router;