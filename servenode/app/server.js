const express = require('express')
const mongoose = require('mongoose')
const conectarDB = require('./config/db')
const cors = require("cors")

// Creamos el servidor
const app = express()

// const port = 3700
// app.get('/', (req, res) =>{
//     res.send('Servidor en linea por pantalla...')
// })
// const cursoRouters = require( './app/routes/server')
// app.use(curosRouters)

// Conexión con Base datos
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://127.0.0.1:27017/Appweb', {
//     useNewUrlParser: true,
// })
// .then(() => {
//     console.log("Conexión establecida...")
// })
// .catch(err => console.log(err))

// Conectamos DB Cursos
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/usuarios', require('./app/usuariosroutes'));
app.use('/api/tareas', require('./app/tareasroutes'));
app.use('/api/lstServicios', require('lstServiciosroutes'));


app.listen(3700, () => {
    console.log('El servidor esta corrinedo perfectamente')
})