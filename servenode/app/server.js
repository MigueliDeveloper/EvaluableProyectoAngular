const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()


conectarDB();

app.use(cors())

app.use(express.json());

app.listen(3001, () => {
    console.log('El servidor está en servicio correctamente');

})

app.use('/api/usuarios', require('./app/usuariosroutes'));
app.use('/api/tareas', require('./app/tareasroutes'));
app.use('/api/lstServicios', require('lstServiciosroutes'));


app.listen(3700, () => {
    console.log('El servidor esta corrinedo perfectamente')
})