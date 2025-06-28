const USER=require('../models/users');
const bcrypt=require('bcrypt');
const saltRounds=10; 
async function handleGetSignup(req,res){
     res.render('signup',{msg:req.flash('msg')});
 }
async function handlePostSignup(req,res,next){
   const{name,password}=req.body;
   try{
    let user=await USER.findOne({
        name:name
    });
    if(!user)
    {
        try{
            await bcrypt.hash(password,saltRounds).then(async function(hash){
                 user=await USER.create({name,password:hash});
            })
            req.session.name=name;
            // req.session.password=password;
            req.flash('msg','SignUp Successful');
            return res.redirect('/login');
        }catch(err){
            // req.flash('msg','SignUp unsuccessful, try again!');
            // return res.redirect('/signup');
            next();
        }
    }
    else
    {
     req.flash('msg','User already exists');
     return res.redirect('/signup');
    }  
   }catch(err){
    next(err);
   }
  
}

module.exports={
    handleGetSignup,handlePostSignup
}