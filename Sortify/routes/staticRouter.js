const express=require('express');
const router=express.Router();
const{handleDiscoverVehicles}=require('../controllers/discovervehicles.js');
const{getHome,getAbout,getVehicles,getAddVehicle,getBookNow,getLogOut,getLogIn}=require('../controllers/static.js');
const { isAuthenticated } = require('../middlewares/authentication.js');

router.get('/',getLogIn);
router.get('/logout',getLogOut);
router.get('/discovervehicles',isAuthenticated,handleDiscoverVehicles);
router.get('/home',isAuthenticated,getHome);
router.get('/about',isAuthenticated,getAbout);
router.get('/vehicles',isAuthenticated,getVehicles);
router.get('/addvehicle',isAuthenticated,getAddVehicle);
router.get('/booknow',isAuthenticated,getBookNow);
module.exports=router;