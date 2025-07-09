const Vehicle=require('../models/vehicle');

async function getHome(req,res){
  res.render('home',{isAdmin:req.user.isAdmin});
}

async function getAbout(req,res){
  res.render('about',{isAdmin:req.user.isAdmin});
}

async function getVehicles(req,res){
  res.render('vehicles',{isAdmin:req.user.isAdmin});
}
async function getAddVehicle(req,res){
  res.render('addvehicle',{isAdmin:req.user.isAdmin});
}

async function getBookNow(req,res){
  const id=req.query.id;
  const vehicle=await Vehicle.findById({_id:id});
  res.render('booknow',{
    isAdmin:req.user.isAdmin,vehicle
  });
}

async function getLogOut(req,res,next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/login');
  })
}
async function getLogIn(req,res){
  res.redirect('/login');
}
module.exports={
    getHome,getAbout,getVehicles,getAddVehicle,getBookNow,getLogOut,getLogIn
}