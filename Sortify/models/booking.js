const mongoose=require('mongoose');
const Vehicle=require('../models/vehicle');
const User=require('../models/user');
const bookingSchema= new mongoose.Schema({
  fullname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobilenumber:{
    type:String,
    required:true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vehicle',
    required: true
  },
  pickupdate: {
    type: String,
    required: true
  },
  pickuptime: {
    type: String,
    required: true
  },
  dropofftime: {
    type: String,
    required: true
  },
  totalHours: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
