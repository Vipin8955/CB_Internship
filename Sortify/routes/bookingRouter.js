const express=require('express');
const router=express.Router();
const {handleBooking}=require('../controllers/booking.js');


router.get('/',handleBooking);

module.exports=router;