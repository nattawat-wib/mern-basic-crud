const mongoose = require("mongoose");
const student_schema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    roll_no: {
        required: true,
        type: Number,
    },
})

module.exports = mongoose.model("student", student_schema);