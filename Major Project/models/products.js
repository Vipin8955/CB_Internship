const mongoose=require('mongoose');
const passport = require('passport');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:[String],
        required:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Product=mongoose.model('Products',productSchema);
module.exports=Product;