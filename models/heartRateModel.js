const mongoose = require('mongoose');

const heartRateSchema = new mongoose.Schema({

user_id: { 
    type: Number, 
    required: true 
},

date: { 
    type: Date, 
    required: true 
},

time: { 
    type: String, 
    required: true 
},

heartRate: { 
    type: Number, 
    required: true 
},

avgHeartRate: { 
    type: Number, 
    required: true 
},

});

module.exports = mongoose.model('HeartRate', heartRateSchema);
