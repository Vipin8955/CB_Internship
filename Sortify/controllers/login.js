const USER=require('../models/user');
const bcrypt=require('bcrypt');



async function handleGetLogin(req,res){
    if(req.user){
       return res.redirect('/home');
    }
    const error=req.flash('error');
    res.render('login',{
        msg:error[0]
    });
 }
module.exports={
    handleGetLogin,
}