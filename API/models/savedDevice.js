const mongoose = require('mongoose');

const savedDeviceSchema = mongose.Schema({
    _id: mongooose.Types.ObjectId(),
    deviceName: String,
    DeviceToken: String,
    deviceId: String    
})

module.exports = mongoose.model('SavedDevice',savedDeviceSchema);