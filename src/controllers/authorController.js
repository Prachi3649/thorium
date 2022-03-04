const authorModel= require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await authorModel.find()
    res.send({msg: allUsers})
}

const updateData = async function(req,res){
    const data = await BookModel.find({name:"Two states"})
    const id = data[0].author_id
    const authorName = await authorModel.find({author_id:id}).select('author_name')
    const updatePrice = await BookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
    res.send({author:authorName, price:updatePrice})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.updateData=updateData