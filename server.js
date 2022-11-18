const express = require("express");
const app = express();

const mongoose = require('mongoose');

const port = 8000;

const util = require("util")

const studentModel = require('./models/Student');
const adressModel = require('./models/Adresse');

// const address = new adressModel({
//     streetName: "Rue de la Reunion",
//     streetNumber: "15",
//     postCode: "75020",
//     city: "Paris",
// });

// address.save((err) => {
// const student = new studentModel({
//     firstName: "John",
//     surname: "DOE",
//     address: address._id,
// });

// student.save((err) => {
//     // manage errors if needs be
//     // saved
// });
// });

// const address = new adressModel({
//     streetName: "Rue de la Gloire",
//     streetNumber: "1",
//     postCode: "75020",
//     city: "Paris",
// });

// address.save((err) => {
// const student = new studentModel({
//     firstName: "Jane",
//     surname: "DOE",
//     address: address._id,
// });

// student.save((err) => {
//     // manage errors if needs be
//     // saved
// });
// });

// studentModel
//     .findById("617533a0f0dbd4be6e339a5e")
//     .populate("address")
//     .then((students) =>     
//         console.log(util.inspect(students, true, Infinity, false))
//     );

// app.get("/students", async (req, res) => {
//     const students = await studentModel.find().populate("address").lean().exec();
//     res.json(students);
// });

mongoose.connect('mongodb://localhost:27017/mongoose_populate', (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    };
    console.log('MongoDB connected Successfully');
});

app.listen(port, () => {
    console.log(`The server started on port ${port}`);
});