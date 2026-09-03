const USER=require('../models/user');
const bcrypt=require('bcrypt');



async function handleGetLogin(req,res){
    if(req.user){
       return res.redirect('/home');
    }
    const error=req.flash('error');
    const msg=req.flash('msg');
    res.render('login',{
        msg: (error && error.length > 0) ? error[0] : (msg && msg.length > 0 ? msg[0] : null)
    });
 }
module.exports={
    handleGetLogin,
}