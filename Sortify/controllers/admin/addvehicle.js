const Vehicle=require('../../models/vehicle');


async function getVehicles(req,res,next){
    const vehicles=await Vehicle.find({});
    res.render('discoverVehicles',{
        vehicles
    });
}
async function getAddVehicle(req,res,next){
    res.render('addvehicle');
}
async function postAddVehicle(req,res,next){
    const{name,price,details,available,imageUrl}=req.body;
    console.log(details,name);
    try{
        await Vehicle.create({
        name,
        price,
        imageUrl,
        details:Array.isArray(details) ? details : [details],
        available:available==='on'
    });
    const vehicles=await Vehicle.find({});
    res.render('discovervehicles',{vehicles});
    }catch(err){
        next(err);
    }
}

module.exports={
    postAddVehicle,getVehicles,getAddVehicle
}