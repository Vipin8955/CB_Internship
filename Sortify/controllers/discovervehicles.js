const Vehicle=require('../models/vehicle');
async function handleDiscoverVehicles(req,res){
    const vehicles=await Vehicle.find({});
    res.render('discovervehicles',{
        vehicles,isAdmin:req.user.isAdmin
    })
}

module.exports={
    handleDiscoverVehicles
}