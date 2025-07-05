const mongoose=require('mongoose');
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
    type:Number,
    required:true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  pickupdate: {
    type: Date,
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
