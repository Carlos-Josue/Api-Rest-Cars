const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    namecar: {
        type: String,
        required: true
    },
    modelo: {
        type: Number,
        required:true
    },
    capacidad:{
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);