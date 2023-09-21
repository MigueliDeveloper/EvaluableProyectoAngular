const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()


conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuariosroutes'));
app.use('/api/tareas', require('./routes/tareasroutes'));
app.use('/api/lstServicios', require('./routes/lstServiciosroutes'));

app.listen(3700, () => {
    console.log('El servidor esta corrinedo perfectamente')
})