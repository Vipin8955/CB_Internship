const express=require('express');
const router=express.Router();
const {handleBooking,getMyBookings}=require('../controllers/booking.js');


router.post('/',handleBooking);
router.get('/mybookings',getMyBookings);
module.exports=router;