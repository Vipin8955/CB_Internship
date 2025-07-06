const Booking=require('../models/booking');
const Vehicle=require('../models/vehicle');
const User=require('../models/user');
async function handleBooking(req,res,next){
    const{fullname,email,mobilenumber,pickupdate,pickuptime,dropofftime,totalprice,totalHours,vehicleid}=req.body;
    const booking=await Booking.create({
        fullname,email,mobilenumber,userId:req.user._id,vehicleId:vehicleid,pickupdate,pickuptime,dropofftime,totalHours,totalPrice:totalprice
    });
    let user=await User.findById({_id:req.user._id});
    user.bookings.push(booking._id);
    await user.save();
    res.render('bookingsuccessful',{
        isAdmin:req.user.isAdmin
    });
}
async function getMyBookings(req,res,next){
    const bookings=await Booking.find({userId:req.user._id}).populate('vehicleId');
    res.render('MyBookings',{bookings,isAdmin:req.user.isAdmin});
}
module.exports={handleBooking,getMyBookings};