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
        type: number,
        required: true
    },
    imagenSer: {
        type: string,
        required: true
    },
    stockSer: {
        type: boolean,
        required: true
    }
});

module.exports = mongoose.model('lstServicios', lstServiciosSchema);


