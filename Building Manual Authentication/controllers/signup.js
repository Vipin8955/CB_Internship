const USER=require('../models/users');

async function handleGetSignup(req,res){
     res.render('signup',{msg:req.flash('msg')});
 }
 async function handlePostSignup(req,res,next){
   const{name,password}=req.body;
   try{
    let user=await USER.findOne({
        name:name,password:password
    });
    if(!user)
    {
        try{
            user=await USER.create({name,password});
            req.session.name=name;
            req.session.password=password;
            req.flash('msg','SignUp Successful');
            return res.redirect('/login');
        }catch(err){
            // req.flash('msg','SignUp unsuccessful, try again!');
            // return res.redirect('/signup');
            nextt();
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