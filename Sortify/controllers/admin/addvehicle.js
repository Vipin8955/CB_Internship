const Vehicle=require('../../models/vehicle');

async function getVehicles(req,res,next){
    const vehicles=await Vehicle.find({});
    res.render('discoverVehicles',{
        vehicles,isAdmin:req.user.isAdmin
    });
}

async function getAddVehicle(req,res,next){
    res.render('addvehicle',{isAdmin:req.user.isAdmin});
}

async function postAddVehicle(req,res,next){
    const{name,price,details,available,imageUrl}=req.body;
    try{
        await Vehicle.create({
        name,
        price,
        imageUrl,
        details:Array.isArray(details) ? details : [details],
        available:available==='on'
    });
    const vehicles=await Vehicle.find({});
    res.render('discovervehicles',{vehicles,isAdmin:req.user.isAdmin});
    }catch(err){
        next(err);
    }
}

async function getEditCar(req,res,next){
    try{
        const id=req.query.id;
        let vehicle=await Vehicle.findById({_id:id});
        res.render('editcar',{isAdmin:req.user.isAdmin,vehicle});
    }catch(err){
        next(err);
    }
}

async function postEditCar(req,res,next){
    const {id,name,price,imageUrl,details,available}=req.body;
    await Vehicle.findByIdAndUpdate({_id:id},{
        name,price,imageUrl,details,available:available==='on'
    });
    res.redirect('/discovervehicles');
}

async function getDeleteCar(req,res,next){
    const {id}=req.query;
    await Vehicle.findByIdAndDelete({_id:id});
    res.redirect('/discovervehicles');
}

module.exports={
    postAddVehicle,getVehicles,getAddVehicle,getEditCar,postEditCar,getDeleteCar
}