const jwt = require("jsonwebtoken");
const UserModel = require('../models/userModel')

const validateToken = async function (req, res, next) {
    let id = req.params.userId
    let user = await UserModel.findById(id);
    if (!user) return res.send({ status: false, msg: "User ID does not exist" });

  let token = req.headers["x-auth-token"];

  if (!token)
    return res.send({ status: false, msg: "[x-auth-token] must be provided" });

  let decodedToken =  jwt.verify(token, "functionup-thorium");
  console.log(decodedToken)
  
  if (decodedToken.userId != id )
    return res.send({ status: false, msg: "Invalid token" });
  next();
};


const authorise = async function(req,res,next){
  let decodedToken =  jwt.verify(req.headers["x-auth-token"], "functionup-thorium");
  console.log(decodedToken)
  
  if (decodedToken.userId != req.params.userId )
    return res.send({ status: false, msg: "You can not able to change the token" });
  next();

}


module.exports.validateToken = validateToken;
module.exports.authorise=authorise