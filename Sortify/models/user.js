const mongoose = require('mongoose');
const passport = require('passport');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true
    },
    password: {
        type: String,
    },
    fbId: {
        type: String
    },
    fbaccessToken: {
        type: String
    },
    googleId: {
        type: String
    },
    googleaccessToken: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }]

});

const User = mongoose.model('user', userSchema);
module.exports = User;