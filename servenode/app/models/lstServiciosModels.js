const mongoose = require('mongoose');

const lstServiciosSchema = mongoose.Schema({
    codSer: {
        type: String,
        required: true
    },
    nombreSer: {
        type: String,
        required: true
    },

    descripcionSer: {
        type: String,
        required: true
    },
    PrecioSer: {
        type: Number,
        required: true
    },
    imagenSer: {
        type: String,
        required: true
    },
    stockSer: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('lstServicios', lstServiciosSchema);


