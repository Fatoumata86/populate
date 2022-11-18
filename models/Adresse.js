const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    streetName: String,
    streetNumber: Number,
    postalCode: Number,
    city: String
});

module.exports = mongoose.model("Address", addressSchema);