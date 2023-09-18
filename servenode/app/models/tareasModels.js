const mongoose = require('mongoose');

const TareasSchema = mongoose.Schema({
    _id: {
        type: number,
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
        type: boolean,
        required: true
    },
    //Puntuación
    tareaPendiente: {
        type: boolean,
        required: true
    },
    // Estado
    tareaFinalizada: {
        type: boolean,
        required: true
    }
});

module.exports = mongoose.model('Tareas', TareasSchema);