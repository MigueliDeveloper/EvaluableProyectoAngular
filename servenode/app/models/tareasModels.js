const mongoose = require('mongoose');

const TareasSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },
    tareaIniciada: {
        type: Boolean,
        required: true
    },
    //Puntuación
    tareaPendiente: {
        type: Boolean,
        required: true
    },
    // Estado
    tareaFinalizada: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Tareas', TareasSchema);