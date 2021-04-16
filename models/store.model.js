const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema({
    Key: String,
    Value: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Store', StoreSchema);