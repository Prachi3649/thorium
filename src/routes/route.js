let obj=require('../logger/logger.js')
let obj1 =require('../logger/logger')
let obj2 = require('../util/helper')
let obj3 =require('../validator/formatter')
let obj4 =require("lodash")

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.log('thorium')
    console.log(obj.url)
    obj1.welcome('welcome')
    obj2.helper('helper')
     obj3.trim('trim')
     obj3.convert()

    res.send('Welcome to my first application')

});

router.get('/bye',function(req,res){
    res.send('hello there! hi')
})
module.exports = router;