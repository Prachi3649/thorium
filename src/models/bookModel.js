const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        required:true,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"newPublisher",
        required:true
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
