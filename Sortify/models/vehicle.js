const mongoose=require('mongoose');
const passport = require('passport');
const vehicleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    details:{
        type:[String],
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },

});

const Vehicle=mongoose.model('vehicle',vehicleSchema);
module.exports=Vehicle;