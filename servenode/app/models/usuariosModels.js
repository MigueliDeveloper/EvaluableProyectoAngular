const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    //Código de la tarea a realizar
    CodeOfTheTaskToBePerformed: {
        type: String,
        required: true
    },
    DescriptionofTheTaskToBePerformed: {
        type: String,
        required: true
    },
    //Puntuación
    Score: {
        type: Number,
        required: true
    },
    // Estado
    State: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);