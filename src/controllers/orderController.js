
const userModel = require('../models/userModel');
const productModel = require('../models/productModel.js');
const OrderModel= require("../models/orderModel.js");

const createOrder= async function (req, res) {
    let userId= req.body.userId
    let productId = req.body.productId
    if(!userId || !productId ){
        return res.status(422).send({msg:"user or Product details is required"});
    }
    


    let user = await userModel.findById(userId)
    let product = await productModel.findById(productId)
    if(!user){

        return res.send({msg:"user with this id is not present"}); 

    }
    if(!product){

        return res.send({msg:"product with this id is not present"}); 

    }

    let isFreeAppUser = req.headers["isfreeappuser"]
        if(isFreeAppUser == 'false'){

            if(product.price < user.balance){
              
                await userModel.updateMany({user:{$eq: user._id }},{$inc: {balance: - product.price}}, {new:true})
                    let userdata = req.body;
                    userdata.isFreeAppUser= isFreeAppUser;
                    userdata.amount = product.price;
                    userdata.date = new Date().toLocaleString();
                  
                    const savedData= await OrderModel.create(userdata);
                    return res.send({status: savedData})
    
            }else{

                return res.send({msg:"you dont have required balence in you'r account"})
                    
            }
        }else{
                    // if user isFreeAppUser = true
                    let userdataf = req.body;
                    userdataf.isFreeAppUser= isFreeAppUser;
                    userdataf.amount = 0;
                    userdataf.date = new Date().toLocaleString();
                  
                    const savedFreeProduct= await OrderModel.create(userdataf);
                    return res.send({status: savedFreeProduct})
    

        }

}

const getOrderData= async function (req, res) {
    let allUsers= await UserModel.find()
    console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createOrder= createOrder
module.exports.getOrderData= getOrderData
