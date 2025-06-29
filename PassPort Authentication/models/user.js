const mongoose=require('mongoose');
const passport = require('passport');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    }
});

const User=mongoose.model('user',userSchema);
module.exports=User;