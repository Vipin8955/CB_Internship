const USER=require('../models/user');
const bcrypt=require('bcrypt');

async function handleGetLogin(req,res){
    if(req.user){
       return res.redirect('/profile');
    }
    res.render('login',{
        msg:req.flash('msg')
    });
 }
// async function handlePostLogin(req,res,next){
    
// }
module.exports={
    handleGetLogin,
    // handlePostLogin
}