const USER=require('../models/users');


async function handleGetLogin(req,res){
    if(req.session.name)
    {
        return res.redirect('/profile');
    }
    res.render('login',{
        msg:req.flash('msg')
    });
 }
 async function handlePostLogin(req,res,next){
    const{name,password}=req.body;
    if(req.session.name===name&&req.session.password===password)
    {
        return res.redirect('/profile');
    }

    try{
        let user=await USER.findOne({name});
        if(!user){
            req.flash('msg','Incorrect Username');
            return res.redirect('/login');
        }
        if(user.password!==password)
        {
            req.flash('msg','Incorrect Password');
            return res.redirect('/login');
        }
        req.session.name=user.name;
        req.session.password=user.password;
        return res.redirect('/profile');
    }catch(err){
        next(err);
    }
    
    req.flash('msg','Incorrect email or password');
    res.redirect('/login');
}


module.exports={
    handleGetLogin,handlePostLogin
}