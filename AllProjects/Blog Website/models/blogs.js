const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    actor:{
        type:mongoose.Schema.Types.ObjectId, ref:'actor' 
    }
});
const BLOG=mongoose.model('Blog',blogSchema);


module.exports=BLOG;