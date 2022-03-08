const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId



const orderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:'User4'

    } , 
    productId:{
        type:ObjectId,
        ref:'Product4'

    } , 
    amount: {
        type:Number
    },
    isFreeAppUser:{
        type:Boolean,
        default:false

    },
    date: {
        type:String, 
        default: "22/11/2021"
    },
    
}, { timestamps: true });


module.exports = mongoose.model('Order4', orderSchema)
