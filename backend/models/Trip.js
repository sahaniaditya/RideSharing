const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
     },
    driver_name: { type: String, required: true, default : "Ram Suthar" },
    driver_phone: { type: String, required: true, default : "9621232324" },
    cab_number: { type: String, required: true, default : "UP 32 MH 2024" },
    status: { type: String, enum: ['in_progress', 'completed'], default: 'in_progress' },
    start_location : { type: String, required: true},
    end_location : { type: String, required: true},
    start_date : {
        type : Date,
        default : Date.now
    },
    end_date : {type : Date}

});



const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
