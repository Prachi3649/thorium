const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
    }, 
    authorName: String, 
    tags: [String],
    totalPages:Number,
    isStockAvaialable:{
        type:Boolean,
        default:false
    
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{
        type:Number,
        default:2021
    }
    
    // isPublished: Boolean,
    // sales: {type: Number, default: 10},
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
