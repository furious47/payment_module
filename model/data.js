const mongoose = require('mongoose')
const {Schema} = mongoose

const schema = new mongoose.Schema({
    Name:{
        type : String,
    },
    Email:{
        type : String
    },
    ReferedUser:{
        type: Schema.Types.ObjectId,
        ref: 'User'
        
    },
    isPaymentMade: {
        type: Boolean,
        default: false
    },
    TotalEarnings: {
        type:Number,
        default : 0}
})

module.exports = mongoose.model('User', schema)