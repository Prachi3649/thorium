const { count } = require("console");
 const productModel= require("../models/productModel")


const createProduct= async function (req, res) {
    //req.headers
    let data= req.body

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}

const getProductData= async function (req, res) {

    let allProduct= await productModel.find( {authorName : "HO" } )
    res.send({msg: allProduct})
   
}




module.exports.createProduct= createProduct
module.exports.getProductData= getProductData