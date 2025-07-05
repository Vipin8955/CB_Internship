const express=require('express');
const router=express.Router();
const{getVehicles ,postAddVehicle,getAddVehicle,getEditCar,postEditCar,getDeleteCar}=require('../controllers/admin/addvehicle');

router.get('/getvehicles',getVehicles);
router.get('/addvehicle',getAddVehicle);
router.post('/addvehicle',postAddVehicle);
router.get('/editcar',getEditCar);
router.post('/editcar',postEditCar);
router.get('/deletecar',getDeleteCar);
module.exports=router;