const mongoose=require('mongoose');
const passport = require('passport');
const reviewSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const Review=mongoose.model('Reviews',reviewSchema);
module.exports=Review;