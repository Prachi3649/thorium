const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: {
        type:String,
        required:true
    },
    balance:{
        type:Number,
        default:100
    },
   
    address:{
        type:String,
        required:true

    } ,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('User4', userSchema) //users