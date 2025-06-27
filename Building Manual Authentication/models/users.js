const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
});
const USER=mongoose.model('user',userSchema);
module.exports=USER;