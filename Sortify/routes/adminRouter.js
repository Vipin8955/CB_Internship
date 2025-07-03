const express=require('express');
const router=express.Router();
const{getVehicles ,postAddVehicle,getAddVehicle}=require('../controllers/admin/addvehicle');


router.get('/getvehicles',getVehicles);
router.get('/addvehicle',getAddVehicle);
router.post('/addvehicle',postAddVehicle);

module.exports=router;