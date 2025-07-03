const express=require('express');
const router=express.Router();
const{handleDiscoverVehicles}=require('../controllers/discovervehicles.js');

router.get('/',handleDiscoverVehicles);

module.exports=router;