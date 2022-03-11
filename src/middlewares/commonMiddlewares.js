
const mid1= function ( req, res, next) {
    try{
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
    }
    catch (error){
        console.log("this is the error",err.message)
      res.status(500).send({msg:"error", error:err.message})  
    }
}

const mid2= function ( req, res, next) {
    try{
    console.log("Hi I am a middleware named Mid2")
    next()
    }
    catch (error){
        console.log("this is the error", error.message)
        res.status(500).send({msg:error, error:error.message})
    }
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    try{
    console.log("Hi I am a middleware named Mid4")
    next()
  }
   catch (error){
    console.log("this is the error", error.message)
    res.status(500).send({msg:error, error:error.message})
}
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
