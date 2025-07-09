async function handleGetProfile(req,res){
    if(req.session.name){
        res.render('profile',{
        name:req.session.name,
        password:req.session.password 
    });
    }
    else{
        res.redirect('/login');
    }
}

module.exports={
    handleGetProfile
};