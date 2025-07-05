const Booking=require('../models/booking');
async function handleBooking(req,res,next){
    const{fullname,email,mobilenumber,pickupdate,pickuptime,dropofftime,totalprice,totalHours}=req.body;
    await Booking.create({
        fullname,email,mobilenumber,userId:req.user._id,vehicleId:req.query.id,pickupdate,pickuptime,dropofftime,totalHours,totalprice
    });
    res.redirect('/discovervehicles');
}
module.exports={handleBooking};