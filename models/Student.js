const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    address: {type: mongoose.Types.ObjectId, ref: "Address"}
});

module.exports  = mongoose.model("Student", studentSchema);