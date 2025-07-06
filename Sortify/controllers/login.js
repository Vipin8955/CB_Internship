const USER=require('../models/user');
const bcrypt=require('bcrypt');

async function handleGetLogin(req,res){
    if(req.user){
       return res.redirect('/home');
    }
    res.render('login',{
        msg:req.flash('msg')
    });
 }
module.exports={
    handleGetLogin,
}