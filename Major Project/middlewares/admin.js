async function isAdmin(req,res,next){
      if(req.user.isAdmin)next();
      else res.redirect('/shop');
}
module.exports={
    isAdmin,
}