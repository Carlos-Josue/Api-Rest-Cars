const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    car: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);